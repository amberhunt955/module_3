const React = require("react");
const DefaultLayout = require("../layout/Default");

function Show(props) {
  const { fruit } = props;

  fruit.name = fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1);

  return (
    <DefaultLayout title="Fruit Display">
      <h2>{fruit.name}</h2>

      The {fruit.name.toLowerCase()} is {fruit.color}.{fruit.readyToEat ? " It is ready to eat." : " Sorry, it's not ripe yet."}
      
      <br />
      <br />

      <a href="/fruits/">Go Back</a>
    </DefaultLayout>
  );
}

module.exports = Show;
