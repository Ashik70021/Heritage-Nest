import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Landing from './Components/Pages/Landing';
import BuyersPage from './Components/Pages/BuyersPage';
import About from './Components/Pages/About';
import PropertyDetails from './Components/Pages/PropertyDetails';
import AllProperty from './Components/AllProperty';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/buyerspage",
        element: <BuyersPage></BuyersPage>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/propertydetails/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: () => fetch('../public/properties.json')
      },
      {
        path: "/allproperty",
        element: <AllProperty></AllProperty>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
