import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
console.log("React app started");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
