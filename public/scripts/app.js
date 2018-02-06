'use strict';

var app = {
  title: 'My título',
  subtitle: 'Esto es un subtitulo',
  options: ['One', 'Two']

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  { id: 'myp' },
  React.createElement('hr', null),
  React.createElement(
    'strong',
    null,
    'babel src/app.js --out-file=scripts/app.js --presets=env,react --watch'
  ),
  React.createElement(
    'h2',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options ' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'first item'
    ),
    React.createElement(
      'li',
      null,
      'second item'
    )
  )
);

var user = {
  name: '',
  age: 26,
  location: 'Argentina'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anónimo'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

ReactDOM.render(templateTwo, document.getElementById('app'));
ReactDOM.render(template, document.getElementById('app2'));
