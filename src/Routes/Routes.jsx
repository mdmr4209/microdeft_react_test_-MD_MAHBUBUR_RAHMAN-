import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Course from "../Pages/Course/Course";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
        path: "/",
        element: <Course />
      }
    ]
    },
  ]);


  export default router