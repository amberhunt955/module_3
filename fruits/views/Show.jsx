//* require/import react
const React = require("react");

function Show(props) {
  const { fruit } = props;
  
  return (
    <div>
      <h1>{fruit.name}</h1>
      The {fruit.name} is {fruit.color}.
      {fruit.readyToEat ? " It is ready to eat." : " Sorry, it's not ripe yet." }
      <br/><br/><a href='/fruits/'>Go back</a>
    </div>
  );
}

module.exports = Show;
