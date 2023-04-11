require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Vegetable = require("./models/Vegetable");

//& === CONFIGURATION
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//& === MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));

//& === ROUTES
/**
 * MAIN INDEX
 */
app.get("/", (req, res) => {
  res.render("Index");
});

/**
 * VEGETABLE INDEX
 */
app.get("/vegetables", (req, res) => {
  Vegetable.find({}, (error, allVegetables) => {
    res.render("vegetables/Index", { vegetables: allVegetables });
  });
});

/**
 * POST method for new vegetable
 */
app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Vegetable.create(req.body, (error, createdVegetable) => {
    res.redirect("/vegetables");
  });
});

/**
 * ADD NEW VEGETABLE
 */
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

/**
 * SHOW ONE VEGETABLE
 */
app.get("/vegetables/:id", (req, res) => {
  Vegetable.findById(req.params.id, (error, foundVegetable) => {
    res.render('vegetables/Show', {vegetable: foundVegetable})
})
});

/**
 * 404 PAGE NOT FOUND
 */
app.get("*", (req, res) => {
  res.render("404");
});

//& === LISTEN AT PORT
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Listening at port ${PORT}`);

  mongoose.set("strictQuery", true);

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
});
