import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import Signup from "../pages/signup/Signup";
import Addjob from "../pages/addjob/Addjob";
import AllJob from "../pages/alljob/AllJob";
import MyJob from "../pages/myjob/MyJob";
import JobDetails from "../pages/jobDetails/JobDetails";
import AppliedJob from "../pages/appliedjob/AppliedJob";
import PrivateRouter from "./PrivateRouter";
import Publicroute from "./Publicroute";

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
        element: (
          <Publicroute>
            <SignIn />
          </Publicroute>
        ),
      },
      {
        path: "/signup",
        element: (
          <Publicroute>
            <Signup />
          </Publicroute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRouter>
            <Addjob />
          </PrivateRouter>
        ),
      },
      {
        path: "/alljobs",
        element: <AllJob />,
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRouter>
            <MyJob />
          </PrivateRouter>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRouter>
            <JobDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRouter>
            <AppliedJob />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
<PrivateRouter>
  {" "}
  <Addjob />
</PrivateRouter>;

export default router;
