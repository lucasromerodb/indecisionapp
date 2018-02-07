'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Pon tu vida en las manos de la tecnología',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var optionValue = e.target.elements.option.value;
  if (optionValue) {
    app.options.push(optionValue);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeItems = function removeItems() {
  app.options = [];
  renderApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {

  var template = React.createElement(
    'div',
    { id: 'myp' },
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
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should i do?'
    ),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    ),
    React.createElement('br', null),
    React.createElement(
      'button',
      { onClick: removeItems },
      'Remove all'
    ),
    React.createElement('hr', null),
    React.createElement(
      'small',
      null,
      'babel src/app.js --out-file=scripts/app.js --presets=env,react --watch'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
