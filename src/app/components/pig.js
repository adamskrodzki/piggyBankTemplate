const template = model => `
Your pig template
`;

class PigComponent {
  constructor(app) {
    this.api = app.api;
    this.name = "pig";
    this.model = {

      pigWeeksLeft: "7",
      weeklyAmount: "10000000000000000",
      weeksSinceLastPayment: "2",
      hasPig:false
    };
  }

  view(model) {
    const cHTML = template(this.model);
    console.log("template ready");
    return `${cHTML}`;
  }
  controller(model) {}
}

export { PigComponent };
