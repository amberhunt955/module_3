const React = require("react");

function Index(props) {
  const { vegetables } = props;

  return (
    <div>
      <h1>Vegetables Index</h1>

      <ul>
        {vegetables.map((vegetable) => {
          return (
            <li key={vegetable._id}>
              <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
            </li>
          );
        })}
      </ul>

      <a href="/vegetables/new">Add a new vegetable</a>

      <br/>
      <br/>

      <a href="/">Go Home</a>
    </div>
  );
}

module.exports = Index;
