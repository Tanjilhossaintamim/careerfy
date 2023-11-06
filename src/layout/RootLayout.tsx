import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import useAuthCheck from "../hooks/useAuthCheck";

const RootLayout = () => {
  useAuthCheck();
  return (
    <div className="font-inter">
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
