const controller = require("../controllers/facility.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/facility/get", controller.get);
  app.get("/api/facility/get/:build_id", controller.getofBuilding);
}
