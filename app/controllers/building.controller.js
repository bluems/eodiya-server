const db = require("../models");
const Building = db.building;

exports.get = (req, res) => {
  Building.findAll().then(building => {
    if(!building) {
      return res.status(404).send({code: "404", message: "Building Not Found."});
    }

    res.status(200).send({code:"OK", data: building});
  })
  .catch(err => {
    res.status(500).send({code:"500", message: err.message});
  });
}
