import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import ErrorBoundary from './Components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)