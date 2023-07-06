import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {createHashRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Characters from './routes/Characters.jsx'
import Spells from './routes/Spells.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
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
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
