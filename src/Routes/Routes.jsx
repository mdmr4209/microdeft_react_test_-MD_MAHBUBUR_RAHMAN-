import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Course from "../Pages/Course/Course";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/course",
        element: <Course />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login", 
        element: <Login />,
      },
      {
        path: "register", 
        element: <Registration />,
      },
    ],
  },
]);

export default router;
