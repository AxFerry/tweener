import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {  createBrowserRouter , RouterProvider } from 'react-router-dom'
import { AppService } from './AppService'
import { Lost } from './Lost'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Lost/>
  },
  {
    path:'/service',
    element: <AppService/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  < RouterProvider   router={router} />
  </StrictMode>,
)
