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
import { api } from "../../api";
import { AppDispatch } from "..";

export const ActionContactsCreatorsFlag = {
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

export const ActionContactsCreators = {
  get: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(ActionContactsCreatorsFlag.loading(true));
      dispatch(ActionContactsCreatorsFlag.getContacts.pending());
      const response = await api.get();
      dispatch(ActionContactsCreatorsFlag.getContacts.success(response));
      dispatch(ActionContactsCreatorsFlag.loading(false));
    } catch (error) {
      dispatch(ActionContactsCreatorsFlag.getContacts.failed(error));
    }
  },
  add: (contacts: WeakContact) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ActionContactsCreatorsFlag.loading(true));
      dispatch(ActionContactsCreatorsFlag.addContacts.pending());
      const response = await api.add(contacts);
      dispatch(
        ActionContactsCreatorsFlag.addContacts.success(response.statusText)
      );
      dispatch(ActionContactsCreatorsFlag.loading(false));
      dispatch(ActionContactsCreators.get())
    } catch (error) {
      dispatch(ActionContactsCreatorsFlag.addContacts.failed(error));
    }
  },
  remove: (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ActionContactsCreatorsFlag.loading(true));
      dispatch(ActionContactsCreatorsFlag.deleteContacts.pending());
      const response = await api.delete(id);
      dispatch(
        ActionContactsCreatorsFlag.deleteContacts.success(response.statusText)
      );
      dispatch(ActionContactsCreatorsFlag.loading(false));
      dispatch(ActionContactsCreators.get())
    } catch (error) {
      dispatch(ActionContactsCreatorsFlag.deleteContacts.failed(error));
    }
  },
  edit: (contacts: WeakContact, id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ActionContactsCreatorsFlag.loading(true));
      dispatch(ActionContactsCreatorsFlag.editContacts.pending());
      const response = await api.edit(contacts, id);
      dispatch(
        ActionContactsCreatorsFlag.editContacts.success(response.statusText)
      );
      dispatch(ActionContactsCreatorsFlag.loading(false));
      dispatch(ActionContactsCreators.get())
    } catch (error) {
      dispatch(ActionContactsCreatorsFlag.editContacts.failed(error));
    }
  },
};
