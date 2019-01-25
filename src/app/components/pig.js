
import noPigTemplate from "./templates/no_pig";
import savingsPigTemplate from "./templates/savings_pig";


class PigComponent {
  constructor(app) {
    this.api = app.api;
    this.name = "pig";
    this.model = {
      pigWeeksLeft: 7,
      weeklyAmount: "10000000000000000",
      weeksSinceLastPayment: 2,
      hasPig:true
    };
  }

  view(model) {
    const cHTML = noPigTemplate(this.model) + " "+ savingsPigTemplate(this.model);
    console.log("template ready");
    return `${cHTML}`;
  }
  controller(model) {}
}

export { PigComponent };
