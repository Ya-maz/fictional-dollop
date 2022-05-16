import { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { authSelector } from "../store/selectors";
import { useActions } from "../hooks/useActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { error, isLoading } = useTypeSelector(authSelector);
  const { login } = useActions();

  const submit = () => login(username, password);
  const failed = () => error && <div style={{ color: "red" }}>{error}</div>;

  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={submit}
      onFinishFailed={failed}
      autoComplete="off"
    >
      <Form.Item label="Username" name="username">
        <Input value={username} onChange={changeUsername} />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password value={password} onChange={changePassword} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 2, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
