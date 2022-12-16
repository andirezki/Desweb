import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Beranda from "./Beranda";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
