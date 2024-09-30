import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

//context
import { DynamicComponentProvider } from './Components/DynamicComponentControl/DynamicComponentController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DynamicComponentProvider>
        <App />
    </DynamicComponentProvider>
    </BrowserRouter>
  </StrictMode>,
)
