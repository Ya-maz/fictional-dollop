import Button from "antd/lib/button";
import Space from "antd/lib/space";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useActions } from "../hooks/useActions";
import React from "react";

const ListPanel = ({ id }: {id:string}) => {
  const { remove } = useActions();

  const removeContact = (e: React.MouseEvent<HTMLElement>) =>
    remove(Number(e.currentTarget.id));

  return (
    <Space size={"small"}>
      <Button type="dashed">
        <EditOutlined />
      </Button>
      <Button type="dashed" onClick={removeContact} id={id}>
        <CloseOutlined />
      </Button>
    </Space>
  );
};

export default ListPanel;
