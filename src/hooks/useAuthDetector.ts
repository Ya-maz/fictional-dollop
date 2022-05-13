import { useEffect } from "react";
import { IUser } from "../model/IUser";
import { useActions } from "./useActions";

export const useAuthDetector = () => {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ user: localStorage.getItem("user" || "") } as IUser);
      setIsAuth(true);
    }
  });
}