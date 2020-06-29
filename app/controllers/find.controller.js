const db = require("../models");
const Find = db.find_q;
const User = db.user;

exports.getFindQuestionList = (req,res) => {
	Find.findAll({
		attributes: ['id','find_q']
	}).then(questions => {
		res.send("{code: 'OK', data:"+JSON.stringify(questions)+"}");
	});
};

exports.getFindUser = (req, res) => {
	User.findOne({
		where: {
			id: req.params.user_id
		}
	}).then(user =>{
		res.send({code: "OK", nickname: user.nickname});
	});
};