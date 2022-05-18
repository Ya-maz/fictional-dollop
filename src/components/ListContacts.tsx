import { useState } from "react";
import { List, Col, Divider } from "antd";

import SearchPanel from "./SearchPanel";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { contactsSelector } from "../store/selectors";
import AddGroupe from "./AddGroup";
import InfoGroup from "./InfoGroup";

const ListContacts = () => {
  const [addGroupeToggle, setAddGroupeToggle] = useState<boolean>(false);
  const { contacts } = useTypeSelector(contactsSelector);

  const switchAddGroupeToggle = () => setAddGroupeToggle(!addGroupeToggle);

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
            <InfoGroup
              contact={contact}
            />
            {index === contacts.length - 1 && (
              <AddGroupe
                toggle={addGroupeToggle}
                clickToggle={switchAddGroupeToggle}
              />
            )}
          </>
        )}
      />
    </Col>
  );
};

export default ListContacts;
