import { Navigate, useLocation } from "react-router-dom";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { RouteNames } from "../router";
import { authSelector } from "../store/selectors";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useTypeSelector(authSelector);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={RouteNames.LOGIN} state={{ from: location }} replace />
    );
  }

  return children;
};

export default RequireAuth;
