
import noPigTemplate from "./templates/no_pig";
import savingsPigTemplate from "./templates/savings_pig";


class PigComponent {
  constructor(app) {
    this.api = app.api;
    this.name = "pig";
    var model = {
      pigWeeksLeft: 7,
      weeklyFinneyAmount: 5,
      weeksSinceLastPayment: 1,
      hasPig:true
    };
    this.model = model;
    this.actions = {
        feedPig:function(){
            app.api.feedPig(model.weeklyFinneyAmount);
        }
    }
  }

  view(model) {
    const cHTML = noPigTemplate(this.model) + " "+ savingsPigTemplate(this.model);
    console.log("template ready");
    return `${cHTML}`;
  }
  controller(model) {}
}

export { PigComponent };
