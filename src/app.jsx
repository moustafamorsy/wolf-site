import React ,{useEffect, useState} from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import ErrorPage from "./component/error-page";

function app() {

  const [show , setShow] = useState(false)




 function switchLang ()  {
   setShow(prevShow => !prevShow)

   console.log(show)
 }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home lang={show} language={switchLang} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about",
      element: <About lang={show} language={switchLang} />,
    },
    {
      path: "services",
      element: <Services lang={show} language={switchLang} />,
    },
    {
      path: "contact",
      element: <Contact lang={show} language={switchLang} />,
    },
  ]);
  
  return (
    <>
    <RouterProvider router={router}  />
    </>
  )
}

export default app