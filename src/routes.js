import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Page/Home";
import Profile from "./Page/Profile";
import Notifications from "./Page/Notifications";
import Massages from "./Page/Massages";
import Premium from "./Page/Premium";
import More from "./Page/More";
import Trending from "./Explore/Trending";
import Foryou from "./Explore/Foryou";
import News from "./Explore/News";
import Sports from "./Explore/Sports";
import Entertainment from "./Explore/Entertainment";
import Login from "./components/Login";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Foryou />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "massages",
        element: <Massages />,
      },
      {
        path: "premium",
        element: <Premium />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "more",
        element: <More />,
      },
      {
        path: "explore/foryou",
        element: <Foryou />,
      },
      {
        path: "explore/trending",
        element: <Trending />,
      },
      {
        path: "explore/news",
        element: <News />,
      },
      {
        path: "explore/sports",
        element: <Sports />,
      },
      {
        path: "explore/entertainment",
        element: <Entertainment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/Signup",
    element: <Signup/>
  }
]);

export default router;
