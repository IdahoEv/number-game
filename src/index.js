import React from 'react';
import ReactDOM from 'react-dom';

import './store';
import './styles/index.scss';

import App from './components/App';

ReactDOM.render(
  <div>
    <App />
    <App />
  </div>
  ,
  document.getElementById('root')
);
