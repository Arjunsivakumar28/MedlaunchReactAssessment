import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider } from './Components/FormContext/FormContext.jsx'

createRoot(document.getElementById('root')).render(
  <FormProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </FormProvider>,
)
