export interface IRoute {
  path: string;
  element: React.ReactNode | null;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  CONTACTS = "/",
}
