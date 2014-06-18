console.log('working');

var React = require('react');
var component = require('./component.jsx')

React.renderComponent(
    <component />,
    document.querySelector('body')
);


