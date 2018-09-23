//package dependencies
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//local dependencies
import App from './app.jsx'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);