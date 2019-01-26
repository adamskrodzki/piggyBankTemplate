import ContractData from './contractdata';
/*global Web3, web3, ethereum*/
class API {

  setupContracts(w3,addr){
      var self = this;
      self.bank = w3.eth.contract(ContractData.BankABI).at(ContractData.BankAddress);
      setInterval(()=>{

        self.bank.getPig.call(function(err,res){

                if(!err && res!="0x0000000000000000000000000000000000000000"){
                    self.pig = w3.eth.contract(ContractData.MoneyPigABI).at(res);
                        self.getPigData().then(
                            ()=>{
                                self.risePigFetched();
                            }
                        )
                }
            self.riseInitialized();
        });

      },5000);
  };
  getPigData(){
      var self = this;
      var promises = [];
      promises.push(new Promise((res,rej)=>{
          self.pig.numberOfWeeksToTheEnd.call(function(err,result){
              if(!err){
                self.numWeeksToTheEnd = result;
                res(true);
              }else{
                  rej(err);
              }
          })
      }));
      promises.push(new Promise((res,rej)=>{
          self.pig.numberOfFinneysWeekly.call(function(err,result){
              if(!err){
                self.weekSum = result;
                res(true);
              }else{
                  rej(err);
              }
          })
      }));
      promises.push(new Promise((res,rej)=>{
          self.pig.numberOfWeeksSinceLast.call(function(err,result){
              if(!err){
                self.numWeeksSinceLast = result;
                res(true);
              }else{
                  rej(err);
              }
          })
      }));
      promises.push(new Promise((res,rej)=>{
          self.web3js.eth.getBalance(self.pig.address,function(err,result){
              if(!err){
                self.sumCollected = result;
                res(true);
              }else{
                  rej(err);
              }
          });
      }));
      return Promise.all(promises);
  }
  constructor() {
    this.callbacks = [];
    this.pigCallbacks = [];
    this.weekSum = 30;
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
  risePigFetched() {
    this.pigFetched = true;
    this.pigCallbacks.forEach(x => {
      this.runPigCallback(x);
    });
  }
  runCallback(x) {
    x({
      isEnabled: this.isEnabled,
      address: this.address
    });
  }
  runPigCallback(x) {
    x({
        numberOfWeeksSinceLast:this.numWeeksSinceLast,
        numberOfWeeksToTheEnd:this.numWeeksToTheEnd,
        sumCollected:this.web3js.fromWei(this.sumCollected,'ether')
    });
  }
  onInitialized(clbk) {
    this.callbacks.push(clbk);
    if (this.initialized) {
      this.runCallback(clbk);
    }
  }
  onPigFetched(clbk){
    this.pigCallbacks.push(clbk);
    if (this.pigFetched) {
      this.runPigCallback(clbk);
    }
  }
  addPig(weeksNum,sumToSave){
      this.bank.createPig(sumToSave,weeksNum,
      {value:this.web3js.toWei(sumToSave,'finney'),
          gasPrice:"10000000000"
          },function(err,res){
          console.log(res,err);
      })
  }
  feedPig(){
      this.pig.feedThePig({
          value:this.web3js.toWei(this.weekSum,'finney'),
          gasPrice:"10000000000"
      },function(err,res){
          console.log(res,err);
      });
  }
}
export { API };
