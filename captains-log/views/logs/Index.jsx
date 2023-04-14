const React = require("react");
const DefaultLayout = require("../layout/Default");

function Index(props) {
  const { logs } = props;

  return (
    <DefaultLayout title="Logs Index">
      <h2>My Logs</h2>

      {logs.length > 0
        ? logs.map((log) => {
            return (
              <ul>
                <li key={log._id}>
                  <a href={`/logs/${log._id}`}>{log.title}</a>
                </li>
              </ul>
            );
          })
        : <p>No entries found.</p>}

      <a href="/logs/new">Create a new log</a>
    </DefaultLayout>
  );
}

module.exports = Index;
