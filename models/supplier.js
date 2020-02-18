const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaSupplier = new Schema({
  jobName: { type: String, unique: true },
  contact: { type: Number },
  size: { type: String },
  truckType: { type: String },
  weight: { type: Number },
  pickUpDate: { type: Date },
  dropOffDate: { type: Date },
  pickUpLoc: { type: String },
  dropOffLoc: { type: String },
  budget: { type: Number },
  message: { type: String }
});

const Supplier = mongoose.model("Supplier", schemaSupplier);

module.exports = Supplier;
