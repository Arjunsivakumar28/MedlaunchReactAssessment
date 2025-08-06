import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Store from './App/Store.jsx'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
    
  </StrictMode>,
)
