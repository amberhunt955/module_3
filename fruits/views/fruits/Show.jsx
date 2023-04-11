//* require/import react
const React = require("react");

function Show(props) {
  const { fruit } = props;

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

      <h1>{fruit.name}</h1>

      The {fruit.name} is {fruit.color}.{fruit.readyToEat ? " It is ready to eat." : " Sorry, it's not ripe yet."}
      
      <br />
      <br />

      <a href="/fruits/">Go back</a>
    </div>
  );
}

module.exports = Show;
