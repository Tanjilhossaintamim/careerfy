import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
const RootLayout = () => {
  return (
    <div className="font-inter">
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
