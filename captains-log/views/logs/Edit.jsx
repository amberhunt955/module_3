const React = require("react");
const DefaultLayout = require("../layout/Default");

function Edit(props) {
  const { log } = props;

  return (
    <DefaultLayout title="Edit Log">
      <form method="POST" action={`/logs/${log._id}/?_method=PUT`} className="form">
        <label>
          Title: <input type="text" name="title" defaultValue={log.title} className="input"/>
        </label>

        <label>
          Entry: <input type="textarea" name="entry" defaultValue={log.entry} />
        </label>

        <label>Ship is broken?
          {log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" defaultChecked /> : <input type="checkbox" name="shipIsBroken" />}
        </label>

        <button type="submit" value="Submit Changes" >Submit</button>
      </form>

      <a href="/logs" className="action">Go back</a>
    </DefaultLayout>
  );
}

module.exports = Edit;
