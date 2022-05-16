import { IContact } from "../../model/IContact";
import { ActionContactsEnum, ContactsAction, ContactsState } from "../types/contacts";

export const initialState = {
  isLoading: false,
  contacts: [] as IContact[],
  error: "" as string | unknown,
  message: "",
};

const contactsReducer = (
  state: ContactsState = initialState,
  action: ContactsAction
): ContactsState => {
  switch (action.type) {
    case ActionContactsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionContactsEnum.CONTACTS_GET_SUCCESS:
      return { ...state, contacts: action.payload };
    case ActionContactsEnum.CONTACTS_GET_FAILED:
      return { ...state, error: action.payload };
    case ActionContactsEnum.CONTACTS_ADD_SUCCESS:
      return { ...state, message: action.payload };
    case ActionContactsEnum.CONTACTS_ADD_FAILED:
      return { ...state, error: action.payload };
    case ActionContactsEnum.CONTACTS_DELETE_SUCCESS:
      return { ...state, message: action.payload };
    case ActionContactsEnum.CONTACTS_DELETE_FAILED:
      return { ...state, error: action.payload };
    case ActionContactsEnum.CONTACTS_EDIT_SUCCESS:
      return { ...state, message: action.payload };
    case ActionContactsEnum.CONTACTS_EDIT_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default contactsReducer;
