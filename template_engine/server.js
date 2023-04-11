//* import express, fs module
const express = require('express');
const fs = require('fs');

//* create express app instance
const app = express();

//* define our template engine
app.engine('madeline', (filePath, options, callback) => {
    //? reading template file...
    fs.readFile(filePath, (err, content) => {
        //? if there is an error, return and pass the error to the callback of the engine
        if (err) return callback(err);
        //? if no error, parse the template file
        const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        //? return the parsed data
        return callback(null, rendered)
    })
})

//& Config ===========================
//? setting the views folder in our app
app.set('views', './views');
//TODO: tell our express app to use our new template engine
//? tells our app to use the 'madeline' engine we defined on top
app.set('view engine', 'madeline');


//TODO: create routes
app.get('/', (req, res) => {
    // res.send('<h1>Hello, world!');
    res.render('template', {title: 'My title', message: 'My first template engine', content: 'I created my own template engine'})
})

app.get('/about-me', (req, res) => {
    res.render('about-me', {title: 'About me', message: 'Learn about me', content: 'Here is some info about me'})
})

app.get('/another-one', (req, res) => {
    res.render('template', {title: 'Another route', message: 'Another route on this page', content: 'Here is an example of another route'})
})

//* have port 3000 listen (must be at bottom)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})