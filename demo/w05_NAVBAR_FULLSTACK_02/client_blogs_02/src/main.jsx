import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import './blog_02.scss'
import App_02 from './App_02'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_02 />
  </StrictMode>
)
