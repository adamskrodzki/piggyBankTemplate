const bankTemplate = model => {
  var greetingsClass = "hidden";
  var metaMaskClass = "hidden";
  if (model.metamaskEnabled) {
    metaMaskClass = "hidden";
  } else {
    metaMaskClass = "visible";
  }
  if (
    !model.metamaskEnabled ||
    model.address === "0x0000000000000000000000000000000000000000"
  ) {
    greetingsClass = "hidden";
  } else {
    greetingsClass = "visible";
  }
  return `
<section>
<h3 class="${metaMaskClass}">You need Web3 provider to use this app</h3>
<h3 class="${greetingsClass}">Hello ${model.address}</h3>
</section>
`;
};

class BankComponent {
  constructor(app) {
    this.api = app.api;
    this.router = app.router;
    this.name = "bank";
    this.model = {
      metamaskEnabled: false,
      address: "0x0000000000000000000000000000000000000000",
      hasPig: true
    };
  }
  view(model) {
    return bankTemplate(model);
  }
  controller(model) {
    var self = this;
    this.api.onInitialized(result => {
      self.model.metamaskEnabled = result.isEnabled;
      if (result.isEnabled) {
        self.model.address = result.address;
      }
    });
  }
}

export { BankComponent };
