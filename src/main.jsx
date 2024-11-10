import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {  createBrowserRouter , RouterProvider } from 'react-router-dom'
import { AppService } from './AppService'
import { Lost } from './Lost'
import { AppManutenz } from './AppManutenz'
import { AppInstal } from './AppInstal'
import { AppGallery } from './AppGallery'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Lost/>
  },
  {
    path:'/service',
    element: <AppService/>
  },
  {
    path:'/installazione',
    element: <AppInstal/>
  },
  {
    path:'/manutenzione',
    element:<AppManutenz/>
  },
  {
    path:'/gallery',
    element:<AppGallery/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  < RouterProvider   router={router} />
  </StrictMode>,
)
