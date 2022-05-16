import { List, Avatar, Button, Space, Col, Divider } from "antd";
import { PlusOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import SearchPanel from "./SearchPanel";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { contactsSelector } from "../store/selectors";
import ListPanel from "./ListPanel";

const ListContacts = () => {
  const { contacts } = useTypeSelector(contactsSelector);

  return (
    <Col>
      <SearchPanel />
      <Divider orientation="left" plain>
        Contacts
      </Divider>
      <List
        itemLayout="horizontal"
        dataSource={contacts}
        renderItem={(contact, index) => (
          <>
            <List.Item
              extra={<ListPanel id={contact.id} />}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{contact.title}</a>}
                description={contact.description}
              />
            </List.Item>
            {index === contacts.length - 1 && (
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
};

export default ListContacts;
