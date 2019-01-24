const template = data => `
Your pig template
`;

class PigComponent {
  constructor(app) {
    this.api = app.api;
    this.name = "pig";
    this.model = {
      pigWeeksLeft: "",
      weeklyAmount: "",
      weeksSinceLastPayment: ""
    };
  }

  view(model) {
    const cHTML = template(this.model);
    console.log("template ready");
    return `
      <ul class="dogs">
        ${cHTML}
      </ul>
    `;
  }
  controller(model) {}
}

export { PigComponent };
