/*global Web3, web3, ethereum*/
class API {
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
            this.web3js = new Web3(web3.currentProvider);
            self.riseInitialized();
            console.log(res);
          })
          .catch(() => {
            this.isEnabled = false;
            self.riseInitialized();
          });
      } else {
        var provider = web3.currentProvider;
        this.web3js = new Web3(web3.currentProvider);
        this.web3js.eth.getAccounts(function(e, data) {
          if (!e) {
            this.address = data[0];
            this.isEnabled = true;
          } else {
            this.isEnabled = false;
          }
        });
      }
    } else {
      this.isEnabled = false;
      this.address = "0x0000000000000000000000000000000000000000";
      this.riseInitialized();
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
}
export { API };
