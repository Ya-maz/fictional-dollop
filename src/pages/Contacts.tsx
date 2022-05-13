import { Card, Col, Layout, Row } from "antd";

import ListContacts from "../components/ListContacts";

const Contacts = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Col span={6}>
          <Card>
            <ListContacts />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contacts;
