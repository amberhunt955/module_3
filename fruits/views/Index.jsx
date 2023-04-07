const React = require('react');

function Index(props) {
    const {fruits} = props
    
    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, i) => {
                    return (
                        <li>
                            <a href={`/fruits/${i}`}>{fruit.name}</a>
                        </li>
                    )
                })}
            </ul>
            <a href="/fruits/new">Add a new fruit</a>
        </div>
    )
}

module.exports = Index;