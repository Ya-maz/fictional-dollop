import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IUser } from "../model/IUser";
import { authSelector } from "../store/selectors";
import { useActions } from "./useActions";
import { useTypeSelector } from "./useTypeSelector";

export const useAuthDetector = () => {
  const { setUser, setIsAuth, get } = useActions();
  const {isAuth} = useTypeSelector(authSelector)
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ user: localStorage.getItem("user" || "") } as IUser);
      setIsAuth(true);
      get();
      return navigate("/");
    }
  }, [isAuth]);
};
