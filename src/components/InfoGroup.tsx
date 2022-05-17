import { Avatar, Button, Form, Input, List } from "antd";
import { UserOutlined, IdcardOutlined, PlusOutlined } from "@ant-design/icons";

import { IContact } from "../model/IContact";
import ListPanel from "./ListPanel";
import { useState } from "react";
import { useActions } from "../hooks/useActions";

const InfoGroupe = ({
  contact,
}: {
  contact: IContact;
}) => {
  const [title, setTitle] = useState<string>(contact.title);
  const [description, setDescription] = useState<string>(contact.description);
  const [infoGroupeToggle, setInfoGroupeToggle] = useState<boolean>(false);
  const { edit } = useActions();

  const submit = () => {
    edit({ title, description }, contact.id);
    switchInfoGroupeToggle()
  };
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const switchInfoGroupeToggle = () => setInfoGroupeToggle(!infoGroupeToggle);
  return infoGroupeToggle ? (
    <List.Item>
    <Form onFinish={submit} layout="inline">
      <Form.Item>
        <Input
          size="small"
          placeholder="title"
          onChange={changeTitle}
          value={title}
          prefix={<UserOutlined />}
        />
      </Form.Item>
      <Form.Item>
        <Input
          size="small"
          placeholder="description"
          onChange={changeDescription}
          value={description}
          prefix={<IdcardOutlined />}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button htmlType="submit" type="dashed" icon={<PlusOutlined />}>
          Submit
        </Button>
      </Form.Item>
      </Form>
      </List.Item>
  ) : (
    <List.Item
      extra={<ListPanel onClick={switchInfoGroupeToggle} id={contact.id} />}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <List.Item.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={<a href="https://ant.design">{contact.title}</a>}
        description={contact.description}
      />
    </List.Item>
  );
};

export default InfoGroupe;
