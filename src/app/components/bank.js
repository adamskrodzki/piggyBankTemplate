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
    +"</section>";
};

class BankComponent {
  constructor(app) {
    this.api = app.api;
    this.router = app.router;
    this.name = "bank";
    var model = {
      metamaskEnabled: false,
      address: "0x0000000000000000000000000000000000000000",
      hasPig: true,
      pig:{
          numberOfWeeks:15,
          payPerWeek:30
      }
    };
    this.actions = {
        addPig:function(event){
            var weekNum = document.getElementById("numOfWeeks").value;
            var sumToSave = document.getElementById("sumToSave").value;
            app.api.addPig(weekNum,sumToSave);
        }
    }
    this.model = model;
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
