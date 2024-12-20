import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx';
import Support from './Support.jsx';
import './index.css'

import * as Sentry from "@sentry/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/",element: <App />},
  {path: "/about_us",element: <About />},
  {path: "/support",element: <Support />}
]);

Sentry.init({
  dsn: "https://90d6b4e9c52deeb3d75f5f70877a5b3d@o4508211205177344.ingest.us.sentry.io/4508211206488064",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} /> 
  </React.StrictMode>,
)
