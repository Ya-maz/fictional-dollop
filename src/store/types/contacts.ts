import { IContact } from "../../model/IContact";

export const enum ActionContactsEnum {
  CONTACTS_GET = "CONTACTS_GET",
  CONTACTS_GET_SUCCESS = "CONTACTS_GET_SUCCESS",
  CONTACTS_GET_FAILED = "CONTACTS_GET_FAILED",
  CONTACTS_ADD = "CONTACTS_ADD",
  CONTACTS_ADD_SUCCESS = "CONTACTS_ADD_SUCCESS",
  CONTACTS_ADD_FAILED = "CONTACTS_ADD_FAILED",
  CONTACTS_DELETE = "CONTACTS_DELETE",
  CONTACTS_DELETE_SUCCESS = "CONTACTS_DELETE_SUCCCESS",
  CONTACTS_DELETE_FAILED = "CONTACTS_DELETE_FAILED",
  CONTACTS_EDIT = "CONTACTS_EDIT",
  CONTACTS_EDIT_SUCCESS = "CONTACTS_EDIT_SUCCESS",
  CONTACTS_EDIT_FAILED = "CONTACTS_EDIT_FAILED",
  SET_IS_LOADING = "SET_IS_LOADING",
}

//get
export interface GetContactsActionPending {
  type: ActionContactsEnum.CONTACTS_GET;
}
export interface GetContactsActionSuccess {
  type: ActionContactsEnum.CONTACTS_GET_SUCCESS;
  payload: IContact[];
}
export interface GetContactsActionFailed {
  type: ActionContactsEnum.CONTACTS_GET_FAILED;
  payload: unknown;
}
export interface GetContactsAction {
  pending: GetContactsActionPending;
  success: GetContactsActionSuccess;
  failed: GetContactsActionFailed;
}

//add
export interface AddContactsActionPending {
  type: ActionContactsEnum.CONTACTS_ADD;
}
export interface AddContactsActionSuccess {
  type: ActionContactsEnum.CONTACTS_ADD_SUCCESS;
  payload: string;
}
export interface AddContactsActionFailed {
  type: ActionContactsEnum.CONTACTS_ADD_FAILED;
  payload: unknown;
}
export interface AddContactsAction {
  pending: AddContactsActionPending;
  success: AddContactsActionSuccess;
  failed: AddContactsActionFailed;
}

//delete
export interface DeleteContactsActionPending {
  type: ActionContactsEnum.CONTACTS_DELETE;
}
export interface DeleteContactsActionSuccess {
  type: ActionContactsEnum.CONTACTS_DELETE_SUCCESS;
  payload: string;
}
export interface DeleteContactsActionFailed {
  type: ActionContactsEnum.CONTACTS_DELETE_FAILED;
  payload: unknown;
}
export interface DeleteContactsAction {
  pending: DeleteContactsActionPending;
  success: DeleteContactsActionSuccess;
  failed: DeleteContactsActionFailed;
}

//edit
export interface EditContactsActionPending {
  type: ActionContactsEnum.CONTACTS_EDIT;
}
export interface EditContactsActionSuccess {
  type: ActionContactsEnum.CONTACTS_EDIT_SUCCESS;
  payload: string;
}
export interface EditContactsActionFailed {
  type: ActionContactsEnum.CONTACTS_EDIT_FAILED;
  payload: unknown;
}
export interface EditContactsAction {
  pending: EditContactsActionPending;
  success: EditContactsActionSuccess;
  failed: EditContactsActionFailed;
}

export interface isLoading {
  type: ActionContactsEnum.SET_IS_LOADING;
  payload: boolean;
}

export type ContactsAction =
  | GetContactsAction
  | AddContactsAction
  | DeleteContactsAction
  | EditContactsAction;
