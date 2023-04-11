const React = require("react");

function Show(props) {
  const { vegetable } = props;

  return (
    <div>
      <h1>{vegetable.name}</h1>

      The {vegetable.name} is {vegetable.color}.{vegetable.readyToEat ? " It is ready to eat." : " Sorry, it's not ready to eat yet."}
      <br />
      <br />

      <a href="/vegetables">Go back</a>
    </div>
  );
}

module.exports = Show;
