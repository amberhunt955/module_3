const React = require('react');
const DefaultLayout = require('../layout/Default');

function New() {
    return(
        <DefaultLayout title="Add a new log">
            <form action="/logs" method="POST">
                <label>Title: <input type="text" name="title" required /></label>

                <label>Entry: <input type="textarea" name="entry" required /></label>

                <label>Ship is broken? <input type="checkbox" name="shipIsBroken" /></label>
                
                <input type="submit" name="" value="Create Log"/>
            </form>
        </DefaultLayout>
    )
}

module.exports = New;