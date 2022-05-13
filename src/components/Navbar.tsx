import { Layout, Menu, Row } from "antd";

const Navbar = () => {
  return (
    <Layout.Header
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      <Row justify="end" align="middle">
        <Menu theme="dark" mode="vertical" selectable={false}>
          <Menu.Item key="1">Login</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
