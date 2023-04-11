require('dotenv').config(); // call and configure your .env package

const express = require('express');
const mongoose = require('mongoose');
// Data
const fruits = require('./models/fruits');
const Fruit = require('./models/Fruit');

const app = express();
const PORT = 3000;

//& === CONFIGURATION
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//! MIDDLEWARE
// setting a middleware as a function to execute for all routes
app.use((req, res, next) => {
    console.log(req.url);
    next();
})

// parses the data from the request
app.use(express.urlencoded({extended: false}))

//* routes
app.get('/', (req, res) => {
    res.render('Index')
})

/**
 * Index Route: (return a list of fruits)
 */
app.get('/fruits/', (req, res) => {
    // res.send(fruits);
    // res.render('fruits/Index', {fruits: fruits})
    Fruit.find({}, (error, allFruits) => {
        res.render('fruits/Index', {fruits: allFruits})
    })
})

/**
 * POST method (accept data from the form)
 */
app.post('/fruits/', (req, res) => {
    console.log(req.body);
    // if checked, req.body.readyToEat is set to 'on'
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // fruits.push(req.body);
    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit)
        res.redirect('/fruits/')
    })
})

/**
 * New Route: (return a form to create a new fruit)
 */
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

/**
 * Show Route: (returns a single fruit)
 */
app.get('/fruits/:id', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitsArray]})
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('fruits/Show', {fruit: foundFruit})
    })
})

app.get('*', (req, res) => {
   res.render('404') 
})

//* tell the app to listen on port 3000
app.listen(PORT, function() {
    console.log(`Server mounting on port ${PORT}...`);
    // get rid of the deprecation warning
    mongoose.set('strictQuery', true);
    // connect to MongoDB
    // object to use the latest options in mongoose (will always be the same)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    // check to see if the connection is successful
    // (if we don't have the once - this could run every single time. we don't want that)
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
    })
})