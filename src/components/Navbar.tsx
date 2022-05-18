import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";

import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { RouteNames } from "../router";
import { authSelector } from "../store/selectors";

const Navbar = () => {
  const { isAuth, user } = useTypeSelector(authSelector);
  const { logout } = useActions();
  const navigate = useNavigate();

  const changePath = () => navigate(RouteNames.LOGIN);
  return (
    <Layout.Header
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      <Row justify="end" align="middle">
        {isAuth ? (
          <>
            <div style={{ color: "white", marginRight: "20px" }}>
              {user.user}
            </div>
            <Menu theme="light" mode="horizontal" selectable={true}>
              <Menu.Item onClick={logout} key="1">
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={true}>
            <Menu.Item onClick={changePath} key="1">
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
