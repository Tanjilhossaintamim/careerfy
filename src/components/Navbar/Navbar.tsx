import { Link, NavLink, useNavigate } from "react-router-dom";
import navlogo from "/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setshowNav] = useState<boolean>(false);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/alljobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/appliedjobs">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/addjob">Add A Job</NavLink>
      </li>
      <li>
        <NavLink to="/myjobs">My Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  const handelShowNav = () => {
    setshowNav(!showNav);
  };
  return (
    <header className="py-4 px-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center">
          {/* logo  */}
          <div>
            <Link to="/">
              <img src={navlogo} alt="logo" className="w-2/3 md:w-auto" />
            </Link>
          </div>
          <div className="ml-5 hidden lg:block">
            <ul className="flex items-center space-x-8 text-color-gray text-base font-normal">
              {links}
            </ul>
          </div>
        </div>
        {/* right side  */}
        <div>
          <motion.button
            whileTap={{ rotate: "100deg" }}
            whileHover={{ rotate: "10deg" }}
            transition={{ type: "spring", stiffness: 101 }}
            onClick={() => navigate("/signin")}
            className="px-4 py-2 bg-color-sky rounded-tl-3xl rounded-br-3xl text-white hidden lg:block"
          >
            Sign In
          </motion.button>
          <motion.span
            onClick={handelShowNav}
            // whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: "90deg" }}
            className="lg:hidden flex items-center justify-center text-3xl text-color-gray cursor-pointer"
          >
            {showNav ? <RxCross2 /> : <GiHamburgerMenu />}
          </motion.span>
        </div>
      </nav>
      {/* mobile menu */}
      <div
        className={`bg-gray-900 lg:hidden absolute ${
          showNav ? "w-60" : "w-0 overflow-hidden"
        } transition-all duration-200 h-screen left-0 top-14`}
      >
        <div className="px-4 pt-5">
          <ul className="flex flex-col space-y-5 text-base text-white">
            {links}
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
