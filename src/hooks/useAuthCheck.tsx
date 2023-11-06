import { signOut } from "firebase/auth";
import { useAppDispatch } from "../redux/app/hooks";
import { useEffect } from "react";

import auth from "../utils/firebase";
import {
  useLoginCheckMutation,
  useLogoutMutation,
} from "../redux/features/auth/authApi";
import { setLoggedIn, setLoggedInUser } from "../redux/features/auth/authSlice";

const useAuthCheck = () => {
  const [loginCheck, { isError }] = useLoginCheckMutation();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    loginCheck({});
  }, []);
  useEffect(() => {
    if (isError) {
      logout({});
      signOut(auth);
      dispatch(setLoggedIn(false));
      dispatch(setLoggedInUser({}));
    }
  }, [isError]);
  return false;
};

export default useAuthCheck;
