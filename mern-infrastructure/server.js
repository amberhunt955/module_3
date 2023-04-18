const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
// development port: 3001
// in production we'll use a PORT number set in the environment variables
const PORT = process.env.PORT || 3001;


//* === CONFIG ===
// logger middleware
app.use(logger('dev'));

// JSON payload middleware (for data coming from front end functions)
app.use(express.json());

// configure both serve-favicon & static middleware to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

//* === ROUTES ===
//? Put API routes here, before the "catch all" route

//? The following "catch all" route (note the *) is necessary to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//* === LISTEN AT DESIGNATED PORT ===
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})