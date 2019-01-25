import helloTemplate from "./templates/hello";
import noMetamaskTemplate from "./templates/no_metamask";
console.log(helloTemplate);


const createPigTemplate = model => {

  var noPigClass = "visible";
  return `
    <section class="${noPigClass}">
     Nie masz jeszcze świnki skarbonki, stwórz jedną
    </section>`;
}

const bankTemplate = model => {
  return `<section> `
 //   +noMetamaskTemplate(model)+''
    +helloTemplate(model)+''
    +createPigTemplate(model)+''
    `</section>`;
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
