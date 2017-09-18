import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (typeof window !== 'undefined') {
  window.onload = function() {
    ReactDOM.render(<App/>, document.getElementById('root'))
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
