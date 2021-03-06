import React from "react";
import Button from "antd/lib/button";
import Space from "antd/lib/space";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";

import { useActions } from "../hooks/useActions";


const ListPanel = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const { remove } = useActions();

  const removeContact = (e: React.MouseEvent<HTMLElement>) =>
    remove(Number(e.currentTarget.id));

  return (
    <Space size={"small"}>
      <Button type="dashed" onClick={onClick}>
        <EditOutlined />
      </Button>
      <Button type="dashed" onClick={removeContact} id={id}>
        <CloseOutlined />
      </Button>
    </Space>
  );
};

export default ListPanel;
