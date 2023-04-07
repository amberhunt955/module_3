const React = require('react');

function New() {
    return (
        <div>
            <h1>New Fruit page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/fruits" method="POST">

              Name: <input type="text" name="name" /><br/><br/>

              Color: <input type="text" name="color" /><br/><br/>

              Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/><br/>
              
              <input type="submit" name="" value="Create Fruit"/>
            </form>
        </div>);
}

module.exports = New;