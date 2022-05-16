import { Routes, Route } from "react-router-dom";

import Wrapper from "./Wrapper";
import RequireAuth from "./RequireAuth";
import { RouteNames } from "../router";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route
          path={RouteNames.CONTACTS}
          element={
            <RequireAuth>
              <Contacts />
            </RequireAuth>
          }
        />
        <Route path={RouteNames.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
