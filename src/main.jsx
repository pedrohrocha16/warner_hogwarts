import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {createHashRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Characters from './pages/Characters.jsx'
import Spells from './pages/Spells.jsx'
import Houses from './pages/Houses.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'characters',
        element:<Characters />
      },
      {
        path:'spells',
        element:<Spells />
      },
      {
        path:'houses',
        element:<Houses />
      },
      {
        path:'*',
        element:<ErrorPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
