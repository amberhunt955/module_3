const React = require('react');

function NotFound() {
    return (
        <div>
            <h1>404 - page does not exist</h1>
            <a href='/'>Go back home</a>
        </div>
    )
}

module.exports = NotFound;