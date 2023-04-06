//* require modules
const express = require("express");

//* create express app instance
const app = express();

//* mount middleware (app.use)
const plants = ["Monstera Deliciosa", "Corpse Flower", "Elephant-Foot Yam", "Witches' Butter"];

//* mount routes (ensure more specific routes are written first)
app.get("/", function (req, res) {
  res.send("<h1>Hello, world!</h1>");
});

/**
 * GET /awesome
 */
app.get('/awesome', (req, res) => {
    res.send('<h1>Plants are awesome!</h1><img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >')
})

//& http://localhost:3000/howdy/abe?title=dev
app.get("/howdy/:firstname", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.query.title}, ${req.params.firstname}`)
});

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params);
    const {firstname, lastname} = req.params
    res.send(`Hello ${firstname} ${lastname}`)
})


app.get("/:indexOfPlantArray", (req, res) => {
  console.log(req.params);
  if (plants[req.params.indexOfPlantArray]) {
    res.send(plants[req.params.indexOfPlantArray]);
  } else {
    res.send('Sorry, no plants at index ' + req.params.indexOfPlantArray + '.')
  }
});

//* tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
