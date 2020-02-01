const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const session = require("express-session");

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
//sessions

app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false //required
  })
);

app.use((req, res, next) => {
  console.log("req.session", req.session);
  next();
});

//routes
//test post route:
// app.post("/", (req, res, next) => {
//   console.log("user signup");
//   req.session.username = req.body.username;
//   res.end();
// });
//link to routes folder
app.use(routes);

// connection to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/camion").then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */

    console.log("Connected to Mongo");
  },
  err => {
    /** handle initial connection error */

    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
