import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './App';
// import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
