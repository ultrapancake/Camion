const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//npm run build

//routes
//test post route:
app.post("/", (req, res, next) => {
  console.log("server post username: ");
  console.log(req.body.username);
  res.end();
});
//link to routes folder
// app.use(routes);

// connection to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thingy");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
