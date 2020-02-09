const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("supplier findAll");
    db.Supplier.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("supplier findById");
    db.Supplier.findById(req.params.id)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create new supplier job, check if job exists");
    console.log('Server Response:', res.body)
    const supplierData = {
      jobName: req.body.jobName,
      size: req.body.size,
      truckType: req.body.truckType,
      weight: req.body.weight,
      pickUpDate: req.body.pickUpDate,
      dropOffDate: req.body.dropOffDate,
      pickUpLoc: req.body.pickUpLoc,
      dropOffLoc: req.body.dropOffLoc,
      budget: req.body.budget,
      message: req.body.message
    };

    db.Supplier.findOne({
      jobName: supplierData.jobName
    })
      .then(Supplier => {
        console.log('What the hell is this:', Supplier);
        if (Supplier) {
          res.json({
            error: "This Job already exists"
          });
        } else {
          db.Supplier.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => {
        res.send("error: " + err);
      });
  },
  update: function(req, res) {
    db.Supplier.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    console.log("delete job :" + req.params.id);
    db.Supplier.deleteOne({ _id: req.params.id })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
