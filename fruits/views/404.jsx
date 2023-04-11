const React = require("react");

function NotFound() {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        {` | `}
        <a href="/fruits/">Fruits</a>
        {` | `}
        <a href="/vegetables/">Vegetables</a> 
        <br/>
        <a href="/fruits/new">Add a new fruit</a>
        {` | `}
        <a href="/vegetables/new">Add a new veggie</a>
      </nav>

      <h1>404 Page Not Found</h1>

      <a href="/">Go back home</a>
    </div>
  );
}

module.exports = NotFound;
