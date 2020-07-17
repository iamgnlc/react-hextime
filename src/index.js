import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import HexTime from './HexTime/';

import disableDevTools from './disableDevTools';

import './index.css';
import * as serviceWorker from './serviceWorker';

// Sentry.
Sentry.init({
  dsn: `https://${process.env.REACT_APP_SENTRY_KEY}@sentry.io/${process.env.REACT_APP_SENTRY_PID}`,
});

disableDevTools(['production']);

ReactDOM.render(<HexTime />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
