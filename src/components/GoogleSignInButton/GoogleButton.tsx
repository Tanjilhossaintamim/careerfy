import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../utils/firebase";
import { useGetTokenMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";

const GoogleButton = () => {
  const [getToken] = useGetTokenMutation();
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        getToken({ email: res.user.email });
        toast.success("logged in successfully !");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <span
      onClick={handelGoogleSignIn}
      className="block uppercase bg-[#4285f4] w-full text-center rounded text-white py-2 mt-10 cursor-pointer"
    >
      Sign in With Google
    </span>
  );
};

export default GoogleButton;
