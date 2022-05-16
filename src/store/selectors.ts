import { RootState } from "./";
import { AuthState } from "./types/auth";
import { ContactsState } from "./types/contacts";

export const authSelector = (state: RootState): AuthState => state.isAuth;
export const contactsSelector = (state: RootState): ContactsState => state.contatcs
