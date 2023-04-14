const React = require("react");
const DefaultLayout = require("../layout/Default");

function Index(props) {
  const { fruits } = props;

  return (
    <DefaultLayout title="Fruits Index">
      <h2>Fruit List</h2>

      <ul>
        {fruits.map((fruit, i) => {
          fruit.name = fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1);
          
          return (
            <div>
              <li key={fruit._id}>
                <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
              </li>

              <a href={`/fruits/${fruit._id}/edit`}>Edit</a>

              <form method="POST" action={`/fruits/${fruit.id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
              </form>
            </div>
          );
        })}
      </ul>

      <a href="/fruits/new">Create a new fruit</a>
    </DefaultLayout>
  );
}

module.exports = Index;
