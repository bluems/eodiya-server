const db = require("../models");
const Facility = db.facility;

exports.get = (req, res) => {
  Facility.findAll().then(facilities => {
    if(!facilities) {
      return res.status(404).send({code: "404", message: "Facility Not Found."});
    }

    res.status(200).send({code:"OK", data: facilities});
  })
  .catch(err => {
    res.status(500).send({code:"500", message: err.message});
  });
}

exports.getofBuilding = (req, res) => {
  Facility.findAll({
    where: {
      buildingBuildId: req.params.build_id
    }
  }).then(facilities => {
    if(!facilities) {
      return res.status(404).send({code: "404", message: "Facility Not Found."});
    }

    res.status(200).send({code:req.params.build_id, data: facilities});
  }).catch(err => {
    res.status(500).send({code:"500", message: err.message});
  })
}
