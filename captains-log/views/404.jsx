const React = require('react');
const DefaultLayout = require('./layout/Default');

function NotFound() {
    return(
        <DefaultLayout title="404 - Page Not Found">
            <h2>Sorry, this page does not exist.</h2>
            <a href="/">Go Home</a>
        </DefaultLayout>
    )
}

module.exports = NotFound;