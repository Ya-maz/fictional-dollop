import { useState } from "react";
import { List, Avatar, Button, Col, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SearchPanel from "./SearchPanel";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { contactsSelector } from "../store/selectors";
import ListPanel from "./ListPanel";

import AddGroupe from "./AddGroup";

const ListContacts = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { contacts } = useTypeSelector(contactsSelector);
  const clickToggle = () => setToggle(!toggle);

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
              <AddGroupe toggle={toggle} clickToggle={clickToggle} />
            )}
          </>
        )}
      />
    </Col>
  );
};

export default ListContacts;
