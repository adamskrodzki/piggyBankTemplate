function setupRoutes(app) {
  app.router.addRoute("bank", "^#/$");
  app.router.addRoute("bank", "^$");
  app.router.addRoute("bank", "^#/bank$");
  app.router.addRoute("pig", "^#/mypiggy");
}

export { setupRoutes };
