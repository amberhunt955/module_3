const React = require("react");
const DefaultLayout = require("../layout/Default");

function New() {
  return (
    <DefaultLayout title="New Fruit Form">
      <h2>Add a New Fruit</h2>

      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />

        <br />
        <br />

        Color: <input type="text" name="color" />

        <br />
        <br />

        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        
        <br />
        <br />
        
        <input type="submit" name="" value="Create Fruit" />

        <br />
        <br />
      </form>

      <a href='/fruits'>Go Back</a>
    
    </DefaultLayout>
  );
}

module.exports = New;
