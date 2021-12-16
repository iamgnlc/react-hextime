import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import HexTime from './HexTime/';

import disableDevTools from './disableDevTools';

import './index.css';
import * as serviceWorker from './serviceWorker';

// Sentry.
Sentry.init({
  dsn: `https://${process.env.REACT_APP_SENTRY_KEY}.ingest.sentry.io/${process.env.REACT_APP_SENTRY_PID}`,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

disableDevTools(['production']);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<HexTime />, rootElement);
} else {
  ReactDOM.render(<HexTime />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
