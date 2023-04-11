const React = require("react");

function New() {
  return (
    <div>
      <h1>Create a new vegetable</h1>

      <form action="/vegetables" method="POST">
        Name: <input type="text" name="name" />
        <br />
        <br />

        Color: <input type="text" name="color" />
        <br />
        <br />

        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <br />
        
        <input type="submit" name="" value="Create Vegetable" />
      </form>

      <br />

      <a href="/vegetables">Go back</a>
    </div>
  );
}

module.exports = New;
