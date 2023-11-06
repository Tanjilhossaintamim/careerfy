import { signOut } from "firebase/auth";
import auth from "./firebase";

const userLogout = () => {
  return signOut(auth);
};
export default userLogout;
