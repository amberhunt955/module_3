const React = require("react");
const DefaultLayout = require("../layout/Default");

function Edit(props) {
  const { log } = props;

  return (
    <DefaultLayout title="Edit Log">
      <form method="POST" action={`/logs/${log._id}/?_method=PUT`}>
        <label>
          Title: <input type="text" name="title" defaultValue={log.title} />
        </label>

        <label>
          Entry: <input type="textarea" name="entry" defaultValue={log.entry} />
        </label>

        <label>
          {log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" defaultChecked /> : <input type="checkbox" name="shipIsBroken" />}
        </label>

        <input type="submit" value="Submit Changes" />
      </form>

      <a href="/logs">Go back</a>
    </DefaultLayout>
  );
}

module.exports = Edit;
