import React from "react";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  CONTACTS = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    component: Login,
    exact: true,
  },
];

export const priveteRoutes: IRoute[] = [
  {
    path: RouteNames.CONTACTS,
    component: Contacts,
    exact: true,
  },
];
