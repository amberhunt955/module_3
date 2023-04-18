const React = require("react");
const DefaultLayout = require("../layout/Default");

function Index(props) {
  const { logs } = props;

  return (
    <DefaultLayout title="Logs Index">
      <section id="logs-index-page">
        <div id="list-of-logs">
          <h2>My Logs</h2>

          {logs.length > 0 ? (
            logs.map((log) => {
              return (
                <ul>
                  <li key={log._id}>
                    <a href={`/logs/${log._id}`} className="log">
                      {log.title}
                    </a>
                  </li>
                </ul>
              );
            })
          ) : (
            <p>No entries found.</p>
          )}
        </div>

        <a href="/logs/new" className="action">
          Create a new log
        </a>
      </section>
    </DefaultLayout>
  );
}

module.exports = Index;
