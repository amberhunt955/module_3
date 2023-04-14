const React = require("react");
const DefaultLayout = require("../layout/Default");

function Edit(props) {
  const { fruit } = props;

  return (
    <DefaultLayout title="Edit Fruit Item">
      <form method="POST" action={`/fruits/${fruit._id}/?_method=PUT`}>
        <label>
          Name: <input type="text" name="name" defaultValue={fruit.name} />
        </label>
        <br />
        <br />

        <label>
          Color: <input type="text" name="color" defaultValue={fruit.color} />
        </label>
        <br />
        <br />

        <label>Is ready to eat: {fruit.readyToEat ? <input type="checkbox" defaultChecked /> : <input type="checkbox" />}</label>
        <br />
        <br />

        <input type="submit" value="Submit Changes" />
        <br />
        <br />
      </form>

      <a href="/fruits">Go back</a>
    </DefaultLayout>
  );
}

module.exports = Edit;
