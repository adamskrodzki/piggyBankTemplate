
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
      sumCollected:"0.005",
      hasPig:false,
    };
    this.model = model;
    this.actions = {
        feedPig:function(){
            app.api.feedPig(model.weeklyFinneyAmount);
        }
    }
    this.api.onPigFetched(this.updatePigModel.bind(this));
  }
  updatePigModel(pig){
      this.model.weeksSinceLastPayment = pig.numberOfWeeksSinceLast;
      this.model.pigWeeksLeft = pig.numberOfWeeksToTheEnd;
      this.model.sumCollected = pig.sumCollected;
      this.model.hasPig = true;
  }
  view(model) {
    const cHTML = noPigTemplate(this.model) + " "+ savingsPigTemplate(this.model);
    console.log("template ready");
    return `${cHTML}`;
  }
  controller(model) {}
}

export { PigComponent };
