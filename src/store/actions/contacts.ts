import { Dispatch } from "redux";

import {
  ActionContactsEnum,
  GetContactsActionPending,
  GetContactsActionSuccess,
  GetContactsActionFailed,
  AddContactsActionPending,
  AddContactsActionFailed,
  AddContactsActionSuccess,
  DeleteContactsActionPending,
  DeleteContactsActionSuccess,
  DeleteContactsActionFailed,
  EditContactsActionPending,
  EditContactsActionSuccess,
  EditContactsActionFailed,
  isLoading,
} from "../types/contacts";
import { IContact, WeakContact } from "../../model/IContact";

export const ContatctsActionCreators = {
  getContacts: {
    pending: (): GetContactsActionPending => ({
      type: ActionContactsEnum.CONTACTS_GET,
    }),
    success: (contacts: IContact[]): GetContactsActionSuccess => ({
      type: ActionContactsEnum.CONTACTS_GET_SUCCESS,
      payload: contacts,
    }),
    failed: (message: unknown): GetContactsActionFailed => ({
      type: ActionContactsEnum.CONTACTS_GET_FAILED,
      payload: message,
    }),
  },
  addContacts: {
    pending: (): AddContactsActionPending => ({
      type: ActionContactsEnum.CONTACTS_ADD,
    }),
    success: (message: string): AddContactsActionSuccess => ({
      type: ActionContactsEnum.CONTACTS_ADD_SUCCESS,
      payload: message,
    }),
    failed: (message: unknown): AddContactsActionFailed => ({
      type: ActionContactsEnum.CONTACTS_ADD_FAILED,
      payload: message,
    }),
  },
  deleteContacts: {
    pending: (): DeleteContactsActionPending => ({
      type: ActionContactsEnum.CONTACTS_DELETE,
    }),
    success: (message: string): DeleteContactsActionSuccess => ({
      type: ActionContactsEnum.CONTACTS_DELETE_SUCCESS,
      payload: message,
    }),
    failed: (message: unknown): DeleteContactsActionFailed => ({
      type: ActionContactsEnum.CONTACTS_DELETE_FAILED,
      payload: message,
    }),
  },
  editContacts: {
    pending: (): EditContactsActionPending => ({
      type: ActionContactsEnum.CONTACTS_EDIT,
    }),
    success: (message: string): EditContactsActionSuccess => ({
      type: ActionContactsEnum.CONTACTS_EDIT_SUCCESS,
      payload: message,
    }),
    failed: (message: unknown): EditContactsActionFailed => ({
      type: ActionContactsEnum.CONTACTS_EDIT_FAILED,
      payload: message,
    }),
  },
  loading: (bool: boolean): isLoading => ({
    type: ActionContactsEnum.SET_IS_LOADING,
    payload: bool,
  }),
};

export const fetchGetContacts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(ContatctsActionCreators.loading(true));
    dispatch(ContatctsActionCreators.getContacts.pending());
    const response = await Api.get();
    dispatch(ContatctsActionCreators.getContacts.success(response.data.body));
    dispatch(ContatctsActionCreators.loading(false));
  } catch (error) {
    dispatch(ContatctsActionCreators.getContacts.failed(error));
  }
};

export const fetchAddContacts =
  (contacts: WeakContact) => async (dispatch: Dispatch) => {
    try {
      dispatch(ContatctsActionCreators.loading(true));
      dispatch(ContatctsActionCreators.addContacts.pending());
      const response = await Api.post(contacts);
      dispatch(ContatctsActionCreators.addContacts.success(response.data.body));
      dispatch(ContatctsActionCreators.loading(false));
    } catch (error) {
      dispatch(ContatctsActionCreators.addContacts.failed(error));
    }
  };

export const fetchDeleteContacts =
  (id: number) => async (dispatch: Dispatch) => {
    try {
      dispatch(ContatctsActionCreators.loading(true));
      dispatch(ContatctsActionCreators.deleteContacts.pending());
      const response = await Api.delete(id);
      dispatch(
        ContatctsActionCreators.deleteContacts.success(response.data.body)
      );
      dispatch(ContatctsActionCreators.loading(false));
    } catch (error) {
      dispatch(ContatctsActionCreators.deleteContacts.failed(error));
    }
  };

export const fetchEditContacts = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(ContatctsActionCreators.loading(true));
    dispatch(ContatctsActionCreators.editContacts.pending());
    const response = await Api.delete(id);
    dispatch(ContatctsActionCreators.editContacts.success(response.data.body));
    dispatch(ContatctsActionCreators.loading(false));
  } catch (error) {
    dispatch(ContatctsActionCreators.editContacts.failed(error));
  }
};
