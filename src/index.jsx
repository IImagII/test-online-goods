import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import './index.css'
import store, { persister } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
