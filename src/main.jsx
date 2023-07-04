import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
    <div className="dot" />
    <div className="controls">
      <p>click once on screen to enter</p>
      <p>first person made</p>
      <p>press w a s d to move</p>
      <p>press space to jump</p>
    </div>
  </Suspense>
)
