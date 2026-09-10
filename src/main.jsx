import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Outside the router: a throw during routing should still land on the
        fallback rather than escaping to a blank document. */}
    <ErrorBoundary>
      {/*
        Both flags are v7 behaviour opted into early. React Router warns about
        them on every page load; taking them now means the eventual v7 upgrade
        changes the version number and not the behaviour.

          v7_startTransition     wraps route state updates in startTransition
          v7_relativeSplatPath   fixes relative link resolution inside splat
                                 routes — this app has one, the "*" catch-all
      */}
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
