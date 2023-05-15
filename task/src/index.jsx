import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Destruction } from './pages/Destruction'
import { Asteroids } from './pages/Asteroids'
import { Asteroid } from './pages/Asteroid'
import {AsteroidsContextProvider} from "./components/asteroids-context/AsteroidsContext";

const router = createBrowserRouter([
    {
        path: '/asteroids',
        element: <Asteroids />,
    },
    {
        path: '/destruction',
        element: <Destruction />,
    },
    {
        path: '/asteroid/:id',
        element: <Asteroid />,
    },
]);

export const AsteroidsContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AsteroidsContextProvider>
            <RouterProvider router={router} />
        </AsteroidsContextProvider>
    </React.StrictMode>
)
