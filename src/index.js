import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Integrations } from '@sentry/tracing';

import App from './App';

import * as serviceWorker from './serviceWorker';

// Sentry.
Sentry.init({
  dsn: `https://${process.env.REACT_APP_SENTRY_KEY}.ingest.sentry.io/${process.env.REACT_APP_SENTRY_PID}`,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

if (['production'].includes(process.env.NODE_ENV)) disableReactDevTools();

const rootElement = document?.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Root />);
} else {
  root.render(<Root />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
