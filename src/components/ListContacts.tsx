import { List, Avatar, Button, Space, Col, Divider } from "antd";
import { PlusOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import SearchPanel from "./SearchPanel";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const ListPanel = () => (
  <Space size={"small"}>
    <Button type="dashed">
      <EditOutlined />
    </Button>
    <Button type="dashed">
      <CloseOutlined />
    </Button>
  </Space>
);

const ListContacts = () => (
  <Col>
    <SearchPanel />
    <Divider orientation="left" plain>
      Contacts
    </Divider>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, i) => (
        <>
          <List.Item style={{ display: "flex", flexDirection: "row" }}>
            <>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <ListPanel />
            </>
          </List.Item>
          {i === data.length - 1 && (
            <List.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Button type="primary" icon={<PlusOutlined />}>
                Add
              </Button>
            </List.Item>
          )}
        </>
      )}
    />
  </Col>
);

export default ListContacts;
