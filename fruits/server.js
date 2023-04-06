//* require express
const express = require('express');

//* create express app instance
const app = express();

//* mount middleware
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];


//* mount routes

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

//? create index route
app.get('/fruits/', (req, res) => {
    res.send(fruits);
})

//? create show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray])
})

//* tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000...');
})