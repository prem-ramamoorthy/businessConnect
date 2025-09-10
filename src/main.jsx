import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import MainPage from './MainPage/MainPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)