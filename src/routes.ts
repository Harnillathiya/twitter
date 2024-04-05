import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])