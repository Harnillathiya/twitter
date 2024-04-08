import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Page/Home"
import Profile from './Page/Profile'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])

export default router;