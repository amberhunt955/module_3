console.log('running script...');

//* import or require a module
//* we can also use the import keyword, but we won't use it now
//* for now, we want to learn the native way to do it in Node.js
const fs = require('fs');
const request = require('request');

//& ============== Request Package ==============
request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
    if (err) {
        console.log(err);
    }
    // console.log(body);
    // console.log(res);
});


//& ============== Circle module ==============
const circle = require('./utils/circle');

// console.log(circle.area(50));
// console.log(circle.circumference(75));


//& ============== Random Num module ==============
const random = require('./utils/random');

for (let i = 0; i < 10; i++) {
    console.log( random.random(100, 200) );
}



//& ============== Weekdays module ==============
//* import or require a module
const daysOfWeek = require('./utils/days-of-week');


//* using the daysOfWeek module
// console.log(daysOfWeek.weekdays);
const day = daysOfWeek.getWeekday(5);
// console.log(day);



//& ============== NODE FS module ==============
// console.log(typeof fs);

//* write a new file
fs.writeFile('./hello.txt', 'Hello world Nodejs!', function(e) {
    if (e) {
        //* creates an explicit error to stop our program
        // throw Error(e.message)
    }
    // console.log('Done writing file!');
})

// fs.appendFile('./hello.txt', '\nMore data hello from node', function() {
//     // console.log('Done');
// })