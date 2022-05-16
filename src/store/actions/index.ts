import { ActionAuthCreators } from "./auth";
import { ActionContactsCreators } from "./contacts";

export const allActionCreators = {
  ...ActionAuthCreators,
  ...ActionContactsCreators
};
