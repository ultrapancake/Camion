const router = require("express").Router();
const userRoutes = require("./user");
const supplierRoutes = require("./supplier");

// User routes
router.use("/user", userRoutes);
router.use("/supplier", supplierRoutes);

module.exports = router;
