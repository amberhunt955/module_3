const React = require('react');
const DefaultLayout = require('../layout/Default');

function Show(props) {
    const { log } = props;

    return(
        <DefaultLayout title="Display Log">
            <h2>{log.title}</h2>
            <p>{log.entry}</p>
            {log.shipIsBroken ? <p>The ship is broken.</p> : <p>No problems reported.</p>}
            <a href={`/logs/${log._id}/edit`}>Edit this entry</a><br/>
            <a href='/logs'>Go Back</a>
        </DefaultLayout>
    )
}

module.exports = Show;