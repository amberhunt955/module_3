const React = require("react");

function DefaultLayout(props) {
  const { title, children } = props;

  return (
    <html>
      <head>
        <link rel="stylesheet" href="/css/app.css" />
        <title>{title}</title>

        <nav className="navbar">
          <a href="/">Home</a>
          {" | "}
          <a href="/logs">Logs</a>
        </nav>
      </head>

      <body>
        <section className="page">
          <h1>{title}</h1>

          {children}
        </section>
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
