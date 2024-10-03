import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import {store} from './App/ReduxStore'

//context
import { DynamicComponentProvider } from './Components/DynamicComponentControl/DynamicComponentController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DynamicComponentProvider>
          <App />
        </DynamicComponentProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
