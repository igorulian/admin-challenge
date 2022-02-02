import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Page/Dashboard'
import { Provider } from 'react-redux'
import {store, persistor} from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)