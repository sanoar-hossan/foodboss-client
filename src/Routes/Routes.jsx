import {
    createBrowserRouter
    
  } from "react-router-dom";
import Main from "./Main/Main";

import HomeContainer from "../Pages/Home/HomeContainer/HomeContainer";
import Menu from "../Pages/Menu/Menu";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <HomeContainer></HomeContainer>,

        },
        {
          path: 'menu',
          element: <Menu></Menu>,
        }
      ]
    },
  ]);
