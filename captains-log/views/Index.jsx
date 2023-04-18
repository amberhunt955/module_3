const React = require('react');
const DefaultLayout = require('./layout/Default');

function Index() {
    return(
        <DefaultLayout title="Home Page">
            <h2 id="welcome">Welcome to my app!</h2>
        </DefaultLayout>
    )
}

module.exports = Index;