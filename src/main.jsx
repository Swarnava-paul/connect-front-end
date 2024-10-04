import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// chakra Provider
import { ChakraBaseProvider } from '@chakra-ui/react'
//redux store
import {store} from './App/ReduxStore.jsx'

// redux provider
import { Provider } from 'react-redux'
//context
import { DynamicComponentProvider } from './Components/DynamicComponentControl/DynamicComponentController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DynamicComponentProvider>
      <Provider store={store}>
        <ChakraBaseProvider>
        <App />
        </ChakraBaseProvider>
      </Provider>
    </DynamicComponentProvider>
    </BrowserRouter>
  </StrictMode>,
)
