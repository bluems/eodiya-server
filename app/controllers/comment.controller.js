const db = require("../models");
const Comment = db.comment;
const User = db.user;

exports.addComment = (req, res) => {
	Comment.create({
		comment: req.body.comment,
		user_id: req.userId,
		buildingBuildId: req.body.build_id
	}).then(comment => {
		res.status(200).send({code: "OK", message: "Registered Comment!"});
	}).catch(err => {
		res.status(500).send({ code: "500", message: err.message });
	});
};

exports.getComment = (req, res) => {
	Comment.findAll({
		where: {
			buildingBuildId: req.params.build_id
		}
	}).then(comments => {
		if(!comments) {
			return res.status(404).send({code: "404", message: "Comment Not Found."});
		}

		res.status(200).send({code:"OK", data: comments});
	})
	.catch(err => {
    	res.status(500).send({code:"500", message: err.message});
  	});
}