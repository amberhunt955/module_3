const React = require("react");

function Index(props) {
  const { fruits } = props;

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

      <h1>Welcome to the website!</h1>
    </div>
  );
}

module.exports = Index;
