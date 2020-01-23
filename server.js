const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//npm run build

//routes
app.use(routes);

// connection to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://tempurlfromheroku");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
