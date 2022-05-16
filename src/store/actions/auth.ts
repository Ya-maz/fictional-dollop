import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "../types/auth";
import { IUser } from "../../model/IUser";
import UserService from "../../services";
import { AppDispatch } from "../";

export const ActionAuthCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(ActionAuthCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await UserService.getUsers();
          const mock = response.data.find(
            (user: IUser) =>
              user.user === username && user.password === password
          );
          if (mock) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("user", mock.user);
            dispatch(ActionAuthCreators.setUser(mock));
            dispatch(ActionAuthCreators.setIsAuth(true));
          } else {
            dispatch(ActionAuthCreators.setError("invalid username or password"));
          }
          dispatch(ActionAuthCreators.setIsLoading(false));
        }, 500);
      } catch (e) {
        dispatch(ActionAuthCreators.setError("Error"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      dispatch(ActionAuthCreators.setUser({} as IUser));
      dispatch(ActionAuthCreators.setIsAuth(false));
    } catch (e) {
      console.log("trouble happens...")
    }
  },
};
