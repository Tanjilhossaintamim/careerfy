import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import Signup from "../pages/signup/Signup";
import Addjob from "../pages/addjob/Addjob";
import AllJob from "../pages/alljob/AllJob";
import MyJob from "../pages/myjob/MyJob";
import JobDetails from "../pages/jobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/addjob",
        element: <Addjob />,
      },
      {
        path: "/alljobs",
        element: <AllJob />,
      },
      {
        path: "/myjobs",
        element: <MyJob />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
