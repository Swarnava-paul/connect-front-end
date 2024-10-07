/*import { StrictMode } from 'react'
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
*/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// chakra Provider
import { ChakraBaseProvider } from '@chakra-ui/react';

// redux store
import { store } from './App/ReduxStore.jsx';

// redux provider
import { Provider } from 'react-redux';

// context
import { DynamicComponentProvider } from './Components/DynamicComponentControl/DynamicComponentController.jsx';

// MUI theme provider
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme(); // Customize your MUI theme here

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <DynamicComponentProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ChakraBaseProvider>
              <App />
            </ChakraBaseProvider>
          </ThemeProvider>
        </Provider>
      </DynamicComponentProvider>
    </BrowserRouter>
  </>
);
