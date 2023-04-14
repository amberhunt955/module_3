const React = require('react');

function DefaultLayout(props) {
    const { title, children } = props;

    return (
        <html>
            <head>
                <title>{title}</title>

                <nav>
                    <a href='/'>Home</a>{" | "}
                    <a href='/logs'>Logs</a>
                </nav>
            </head>

            <body>
                <h1>{title}</h1>

                {children}
            </body>
        </html>
    )
}

module.exports = DefaultLayout;