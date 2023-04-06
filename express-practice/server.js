//* import or load the express module
const express = require('express');

//* create an instance of the express app
const app = express();


//& ====== DEFINE OUR ROUTES

//* root or main routes
app.get('/', function(req, res) {
    // use the response object to send back some data
    res.send('<h1>Hello, world!</h1>');
})

//* home page route
app.get('/home', function(req, res) {
    res.send('<h1>Home Page</h1>')
})

//* cars route
app.get('/cars', function(req, res) {
    // res.send('List of cars')
    res.json({cars: ['honda', 'bmw']});
})

//* this is for receiving some data (later on)
//* you can have the same path for different methods
app.post('/cars', function(req, res) {
    res.send('New car created!')
})

//* start to listen for requests
//* this should always be at the bottom
app.listen(3000, function() {
    console.log('Server is running...');
})


