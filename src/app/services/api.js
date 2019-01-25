import * as ContractData from './contractdata';
/*global Web3, web3, ethereum*/
class API {

  setupContracts(w3,addr){
      var self = this;
      self.bank = w3.eth.contract(ContractData.BankABI).at(ContractData.BankAddress);
      self.bank.pigs.call(addr,function(err,res){
          if(!err){
              self.pig = w3.eth.contract(ContractData.MoneyPigABI).at(addr);
          }
          self.riseInitialized();
      })
  };
  constructor() {
    this.callbacks = [];
    var self = this;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== "undefined") {
      // Use the browser's ethereum provider
      if (typeof ethereum !== undefined) {
        ethereum
          .enable()
          .then(res => {
            console.log(res);
            self.isEnabled = true;
            self.address = res[0];
            var provider = web3.currentProvider;
            self.web3js = new Web3(web3.currentProvider);
            self.setupContracts(self.web3js,self.address);
            console.log(res);
          })
          .catch(() => {
            this.isEnabled = false;
            self.riseInitialized();
          });
      } else {
        var provider = web3.currentProvider;
        self.web3js = new Web3(web3.currentProvider);
        self.web3js.eth.getAccounts(function(e, data) {
          if (!e) {
            self.address = data[0];
            self.setupContracts(self.web3js,self.address);
            self.isEnabled = true;
          } else {
            self.isEnabled = false;
          }
        });
      }
    } else {
      self.isEnabled = false;
      self.address = "0x0000000000000000000000000000000000000000";
      self.riseInitialized();
    }
  }
  riseInitialized() {
    this.initialized = true;
    this.callbacks.forEach(x => {
      this.runCallback(x);
    });
  }
  runCallback(x) {
    x({
      isEnabled: this.isEnabled,
      address: this.address
    });
  }
  onInitialized(clbk) {
    this.callbacks.push(clbk);
    if (this.initialized) {
      this.runCallback(clbk);
    }
  }
  addPig(weeksNum,sumToSave){
      this.bank.createPig(sumToSave,weeksNum,function(res,err){
          console.log(res,err);
      })
  }
  feedPig(){
      throw "Not done yet";
  }
}
export { API };
