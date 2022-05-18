import { useState } from "react";
import { UserOutlined, IdcardOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, List, Form, Input } from "antd";

import { useActions } from "../hooks/useActions";

const AddGroupe = ({
  toggle,
  clickToggle,
}: {
  toggle: boolean;
  clickToggle: () => void;
  }) => {
  
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { add } = useActions();

  const submit = () => add({ title, description });
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
  setTitle(e.target.value);
  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
  setDescription(e.target.value);

  return toggle ? (
    <List.Item>
      <Form onFinish={submit} layout="inline">
        <Form.Item>
          <Input
            size="small"
            placeholder="title"
            onChange={changeTitle}
            prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item>
          <Input
            size="small"
            placeholder="description"
            onChange={changeDescription}
            prefix={<IdcardOutlined />}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button htmlType="submit" type="primary"icon={<PlusOutlined />}>Submit</Button>
      </Form.Item>
      </Form>
    </List.Item>
  ) : (
    <List.Item
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Button type="primary" icon={<PlusOutlined />} onClick={clickToggle}>
        Add
      </Button>
    </List.Item>
  );
};
export default AddGroupe;
