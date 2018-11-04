var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var data = require("./eventsData");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", function(req, res) {
  console.log("Response:", data);
  res.json(data);
});

app.use("/api", router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
