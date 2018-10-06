'use strict';

console.log('App.js is running!');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is a sample post!!!'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
