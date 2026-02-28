import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/shared/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Faq from './pages/FAQ/Faq.jsx'
import Signup from './pages/Register/Signup.jsx'
import Signin from './pages/Login/Signin.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
const router = new createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/signin",
        element:<Signin/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
  <RouterProvider router={router}/>  
  </AuthProvider>
  </>
)
