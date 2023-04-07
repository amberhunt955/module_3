const express = require('express');
const fruits = require('./models/fruits');

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
    res.send('<h1>Hello</h1>')
})

/**
 * Index Route: (return a list of fruits)
 */
app.get('/fruits/', (req, res) => {
    // res.send(fruits);
    res.render('Index', {fruits: fruits})
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
    fruits.push(req.body);
    res.redirect('/fruits/')
})

/**
 * New Route: (return a form to create a new fruit)
 */
app.get('/fruits/new', (req, res) => {
    res.render('New')
})

/**
 * Show Route: (returns a single fruit)
 */
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('Show', {fruit: fruits[req.params.indexOfFruitsArray]})
})

app.get('*', (req, res) => {
   res.render('404') 
})

//* tell the app to listen on port 3000
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}...`);
})