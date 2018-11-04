var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var data = require("./events");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get("/", function(req, res) {
  console.log("Response:", data);
  res.json(data);
});

app.use("/api", router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
