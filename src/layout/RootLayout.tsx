import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase";
import { useAppDispatch } from "../redux/app/hooks";
import {
  setLoadingState,
  setLoggedIn,
  setLoggedInUser,
} from "../redux/features/auth/authSlice";
import useAuthCheck from "../hooks/useAuthCheck";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  useAuthCheck();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const user = {
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoUrl: currentUser.photoURL,
        };
        dispatch(setLoggedInUser(user));
        dispatch(setLoggedIn(true));
      } else {
        dispatch(setLoggedInUser({}));
        dispatch(setLoggedIn(false));
      }
      dispatch(setLoadingState(false));
      console.log(currentUser);
    });
    return () => subscribe();
  }, []);
  return (
    <div className="font-inter">
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
