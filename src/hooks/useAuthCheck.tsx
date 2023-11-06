import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../redux/app/hooks";
import { useEffect, useState } from "react";

import {
  setLoadingState,
  setLoggedIn,
  setLoggedInUser,
} from "../redux/features/auth/authSlice";
import auth from "../utils/firebase";
import {
  useLoginCheckMutation,
  useLogoutMutation,
} from "../redux/features/auth/authApi";

const useAuthCheck = () => {
  const [logout] = useLogoutMutation();
  const [loginCheck, { isSuccess, isError, error }] = useLoginCheckMutation();
  const [currenuserProfile, setCurrentUserProfiel] = useState<object>({});
  const dispatch = useAppDispatch();
  //observer funtion it will check if user i logged in or not
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const user = {
          email: currentUser?.email,
          displayName: currentUser?.displayName,
          photoUrl: currentUser?.photoURL,
        };
        setCurrentUserProfiel(user);
      } else {
        setCurrentUserProfiel({});
      }

      loginCheck({});
      // dispatch(setLoggedInUser(user));
      // dispatch(setLoadingState(false));
      return () => {
        subscribe();
      };
    });
  }, []);
  useEffect(() => {
    if (isError) {
      logout({});
      dispatch(setLoadingState(false));
      dispatch(setLoggedIn(false));
    } else {
      dispatch(setLoadingState(false));
      dispatch(setLoggedIn(true));

      dispatch(setLoggedInUser(currenuserProfile));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error, isSuccess]);
  return;
};

export default useAuthCheck;
