import { useContext } from "react";
import { AuthContext } from "./Context";

export const useAuth = () => {
  return useContext(AuthContext);
};
