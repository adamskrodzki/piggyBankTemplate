import { PigComponent } from "./../components/pig";
import { BankComponent } from "./../components/bank";

function setupComponents(app) {
  app.addComponent(new PigComponent(app));
  app.addComponent(new BankComponent(app));
}

export { setupComponents };
