import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import ErrorPage from "./component/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
