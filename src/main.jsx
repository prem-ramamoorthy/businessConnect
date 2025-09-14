import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import MainPage from './MainPage/MainPage'
import Members from './Members/Members'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Members />
  </StrictMode>,
)