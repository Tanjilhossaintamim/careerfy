import { CiUser } from "react-icons/ci";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const handelTogglePassword = () => {
    setshowPassword((prev) => !prev);
  };
  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center min-h-[70vh] px-4 lg:px-0">
      <form action="" className="w-full lg:w-2/3 mx-auto">
        <h1 className="text-xl font-bold mb-9 text-[#333]">
          LOGIN TO YOUR ACCOUNT
        </h1>
        <div className="flex flex-col w-full text-color-gray text-sm space-y-3 mb-10">
          <label htmlFor="email">Email Address:</label>
          <div className="h-[42px] border border-color-gray-1 flex justify-between items-center w-full rounded px-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="h-full outline-none bg-transparent"
            />
            <span className="flex items-center justify-center text-xl text-color-sky">
              <CiUser />
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full text-color-gray text-sm space-y-3">
          <label htmlFor="password">Password:</label>
          <div className="h-[42px] border border-color-gray-1 flex justify-between items-center w-full rounded px-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              className="h-full outline-none bg-transparent"
            />
            <span
              className="flex items-center justify-center text-xl text-color-sky cursor-pointer"
              onClick={handelTogglePassword}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </span>
          </div>
        </div>
        <p className="text-color-gray text-sm mt-3 text-right">
          don&apos;t have an account?
          <Link className="text-color-sky hover:underline" to="/signup">
            {" "} signup
          </Link>
        </p>
        <button className="uppercase bg-color-sky w-full text-center rounded text-white py-2 mt-10">
          Sign in
        </button>

        <span className="block uppercase bg-[#4285f4] w-full text-center rounded text-white py-2 mt-10">
          Sign in With Google
        </span>
      </form>
    </div>
  );
};

export default SignIn;
