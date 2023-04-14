require("dotenv").config();

const express = require("express");
const connectToDB = require("./config/db");

// Data
const Log = require("./models/Log");

const app = express();

//& === CONFIGURATION
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//& === MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

//& === ROUTES
/**
 * MAIN INDEX
 */
app.get("/", (req, res) => {
  res.render("Index");
});

/**
 * LOGS INDEX
 */
app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("logs/Index", { logs: allLogs });
  });
});

/**
 * POST FLIGHT TO INDEX
 */
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

/**
 * LOGS INDEX
 */
app.get("/logs/new", (req, res) => {
  res.render("logs/New");
});

/**
 * SHOW LOG
 */
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    res.render("logs/Show", { log: foundLog });
  });
});

/**
 * 404 NOT FOUND
 */
app.get("*", (req, res) => {
  res.render("404");
});

//& === LISTEN AT DESIGNATED PORT
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running at port ${PORT}...`);
  connectToDB();
});
