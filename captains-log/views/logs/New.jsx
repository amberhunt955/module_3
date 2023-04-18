const React = require('react');
const DefaultLayout = require('../layout/Default');

function New() {
    return(
        <DefaultLayout title="Add a new log">
            <form action="/logs" method="POST" className='form'>
                <label>Title: <input type="text" name="title" required /></label>

                <label>Entry: <input type="textarea" name="entry" required /></label>

                <label>Ship is broken? <input type="checkbox" name="shipIsBroken" /></label>
                
                <button type="submit" value="Submit Changes" >Submit</button>
            </form>

            <a href="/logs" className="action">Go back</a>
        </DefaultLayout>
    )
}

module.exports = New;