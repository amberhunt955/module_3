require("dotenv").config();

const express = require("express");
const connectToDB = require("./config/db");
const methodOverride = require("method-override");

// Data
const Log = require("./models/Log");

const app = express();

//& === CONFIGURATION
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//& === MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static('public'));

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
 * POST LOG TO INDEX
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
 * CREATE NEW LOG
 */
app.get("/logs/new", (req, res) => {
  res.render("logs/New");
});

/**
 * RETURN THE EDIT FORM
 */
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    if (!error) {
      res.render("logs/Edit", { log: foundLog });
    } else {
      res.send({ msg: error.message });
    }
  });
});

/**
 * HANDLE EDIT FORM DATA
 */
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedLog) => {
    res.redirect(`/logs/${req.params.id}`)
  });
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
 * DELETE LOG
 */
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedLog) => {
    res.redirect("/logs");
  });
  // res.send('deleting fruit...')
});

/**
 * 404 NOT FOUND
 */
app.get("*", (req, res) => {
  res.render("404");
});

//& === LISTEN AT DESIGNATED PORT
const PORT = 2000;

app.listen(PORT, function () {
  console.log(`Server running at port ${PORT}...`);
  connectToDB();
});
