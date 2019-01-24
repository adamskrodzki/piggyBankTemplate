import { Router } from "./../utils/router";
import { API } from "./../services/api";

function buildServices(app) {
  var api = new API();
  var router = new Router(app);
  app.api = api;
  app.router = router;
}

export { buildServices };
