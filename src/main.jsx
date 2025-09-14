import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import MainPage from './MainPage/MainPage'
import Members from './Members/Members'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound/NotFound.jsx'

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> , errorElement: <NotFound />},
  { path: '/members', element: <Members /> }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)