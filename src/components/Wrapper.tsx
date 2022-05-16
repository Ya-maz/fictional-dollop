import Layout from "antd/lib/layout/layout";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Wrapper = () => {
  return (
    <Layout>
      <Navbar />
      <Outlet />
    </Layout>
  );
};
export default Wrapper;
