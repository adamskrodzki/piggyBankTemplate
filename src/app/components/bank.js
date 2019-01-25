import helloTemplate from "./templates/hello";
import noMetamaskTemplate from "./templates/no_metamask";
import createPigTemplate from "./templates/create_pig";
import checkPigTemplate from "./templates/check_pig";

const bankTemplate = model => {
  return "<section>"+''
    +noMetamaskTemplate(model)+''
    +helloTemplate(model)+''
    +createPigTemplate(model)+''
    +checkPigTemplate(model)+''
    "</section>";
};

class BankComponent {
  constructor(app) {
    this.api = app.api;
    this.router = app.router;
    this.name = "bank";
    this.model = {
      metamaskEnabled: false,
      address: "0x0000000000000000000000000000000000000000",
      hasPig: true,
      pig:{
          weeksLeft:5,
          payPerWeek:"1000000000000000"
      }
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
