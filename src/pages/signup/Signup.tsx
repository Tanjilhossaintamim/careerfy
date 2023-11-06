import { CiUser } from "react-icons/ci";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singupSchema } from "../../utils/schema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../utils/firebase";
import { useGetTokenMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";
import GoogleButton from "../../components/GoogleSignInButton/GoogleButton";

interface InputFields {
  email: string;
  name: string;
  photo: string;
  password: string;
}

const Signup = () => {
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [getToken, { data }] = useGetTokenMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>({
    resolver: yupResolver(singupSchema),
  });

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    handelSignUp(data);
  };
  const handelTogglePassword = () => {
    setshowPassword((prev) => !prev);
  };
  const handelSignUp = ({ email, password, name, photo }: InputFields) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const currentUser = res.user;
        updateProfile(currentUser, { displayName: name, photoURL: photo })
          .then((response) => {
            console.log(response);
            getToken({ email });
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };
  useEffect(() => {
    if (data?.success) {
      navigate("/");
      toast.success("logged in successfully !");
    }
  }, [data,navigate]);
  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center min-h-[70vh] px-4 lg:px-0 my-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-2/3 mx-auto"
      >
        <h1 className="text-xl font-bold mb-9 text-[#333]">
          REGISTER YOUR ACCOUNT
        </h1>

        <div className="flex flex-col w-full text-color-gray text-sm space-y-3 mb-10">
          <label htmlFor="email">Your Name:</label>
          <div className="h-[42px] border border-color-gray-1 flex justify-between items-center w-full rounded px-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="h-full outline-none bg-transparent w-3/4"
              {...register("name", { required: "Name is Required !" })}
            />
            <span className="flex items-center justify-center text-xl text-color-sky">
              <CiUser />
            </span>
          </div>
          {errors?.name?.message && (
            <small className="text-red-600">{errors.name.message}</small>
          )}
        </div>
        <div className="flex flex-col w-full text-color-gray text-sm space-y-3 mb-10">
          <label htmlFor="email">Email Address:</label>
          <div className="h-[42px] border border-color-gray-1 flex justify-between items-center w-full rounded px-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="h-full outline-none bg-transparent w-3/4"
              {...register("email", { required: "Email is Required !" })}
            />
            <span className="flex items-center justify-center text-xl text-color-sky">
              <CiUser />
            </span>
          </div>
          {errors?.email?.message && (
            <small className="text-red-600">{errors.email.message}</small>
          )}
        </div>
        <div className="flex flex-col w-full text-color-gray text-sm space-y-3 mb-10">
          <label htmlFor="email">Image Url:</label>
          <div className="h-[42px] border border-color-gray-1 flex justify-between items-center w-full rounded px-4">
            <input
              type="url"
              placeholder="Enter Your Image Url"
              className="h-full outline-none bg-transparent w-3/4"
              {...register("photo", { required: "Photo is Required !" })}
            />
            <span className="flex items-center justify-center text-xl text-color-sky">
              <CiUser />
            </span>
          </div>
          {errors?.photo?.message && (
            <small className="text-red-600">{errors.photo.message}</small>
          )}
        </div>
        <div className="flex flex-col w-full text-color-gray text-sm space-y-3">
          <label htmlFor="password">Password:</label>
          <div className="h-[42px] border border-color-gray-1 flex justify-between items-center w-full rounded px-4">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter Password"
              className="h-full outline-none bg-transparent w-3/4"
            />
            <span
              className="flex items-center justify-center text-xl text-color-sky cursor-pointer"
              onClick={handelTogglePassword}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </span>
          </div>
          {errors?.password?.message && (
            <small className="text-red-600">{errors.password.message}</small>
          )}
        </div>
        <p className="text-color-gray text-sm mt-3 text-right">
          already have an account?
          <Link className="text-color-sky hover:underline" to="/signin">
            {" "}
            signin
          </Link>
        </p>
        <button
          disabled={loading}
          className="uppercase bg-color-sky w-full text-center rounded text-white py-2 mt-10"
        >
          {loading ? (
            <span className="text-2xl">
              <BiLoaderAlt className="animate-spin" />
            </span>
          ) : (
            "Sign Up"
          )}
        </button>

        <GoogleButton />
      </form>
    </div>
  );
};

export default Signup;
