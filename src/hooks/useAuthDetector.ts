import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IUser } from "../model/IUser";
import { useActions } from "./useActions";

export const useAuthDetector = () => {
  const { setUser, setIsAuth } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ user: localStorage.getItem("user" || "") } as IUser);
      setIsAuth(true);
      return navigate("/");
    }
  }, [navigate]);
};
