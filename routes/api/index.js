const router = require("express").Router();
const userRoute = require("./books");

// Book routes
router.use("/books", userRoute);

module.exports = router;
