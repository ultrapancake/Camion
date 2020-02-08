const router = require("express").Router();
const supplierController = require("../../controllers/supplierController");

// "/api/supplier"
router
  .route("/")
  .get(supplierController.findAll)
  .post(supplierController.create);

// "/api/supplier/:id"
router
  .route("/:id")
  .get(supplierController.findById)
  .delete(supplierController.delete);

module.exports = router;
