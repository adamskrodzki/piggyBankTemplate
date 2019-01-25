import { App } from "./app/utils/app";
import { buildServices } from "./app/configuration/serviceBuilder";
import { setupComponents } from "./app/configuration/componentBuilder";
import { setupRoutes } from "./app/configuration/routesConfig";

document.addEventListener("DOMContentLoaded", function(event) {
setupApp();
});

function setupApp() {
  const app = new App("#app");

  buildServices(app);
  setupComponents(app);
  setupRoutes(app);
}
