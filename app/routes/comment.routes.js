const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
	  "/api/comment/add",
		[authJwt.verifyToken],
		controller.addComment
	);

	app.post(
		"/api/comment/get/:build_id",
		controller.getComment
	);
}


