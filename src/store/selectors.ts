import { RootState } from "./";
import { AuthState } from "./types/auth";

export const authSelector = (state: RootState):AuthState => state.isAuth;
