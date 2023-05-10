import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Destruction} from "./pages/Destruction";
import {Asteroids} from "./pages/Asteroids";
import {Asteroid} from "./pages/Asteroid";

const router = createBrowserRouter([
    {
        path: "/asteroids",
        element: <Asteroids/>,
    },
    {
        path: "/destruction",
        element: <Destruction/>,
    },
    {
        path: "/asteroid/:id",
        element: <Asteroid/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);