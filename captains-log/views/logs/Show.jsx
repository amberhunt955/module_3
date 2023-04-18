const React = require("react");
const DefaultLayout = require("../layout/Default");

function Show(props) {
  const { log } = props;

  return (
    <DefaultLayout title="Display Log">
      <div id="log-display">
        <h2>{log.title}</h2><br/>

        <p>{log.entry}</p><br/>

        {log.shipIsBroken ? <p>The ship is broken.</p> : <p>No problems reported.</p>}
      </div>

      <div id="options">
        <a href={`/logs/${log._id}/edit`} className="action">
          Edit this entry
        </a>

        <form method="POST" action={`/logs/${log.id}?_method=DELETE`}>
          <input type="submit" value="DELETE" className="action" />
        </form>

        <a href="/logs" className="action">
          Go Back
        </a>
      </div>
    </DefaultLayout>
  );
}

module.exports = Show;
