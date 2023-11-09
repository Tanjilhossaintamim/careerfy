import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";
import { ReactNode } from "react";

const PrivateRouter = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, loading } = useAppSelector((state) => state.auth);
  if (loading) {
    return <div>loading...</div>;
  }
  return isLoggedIn ? children : <Navigate to={"/signin"} />;
};

export default PrivateRouter;
