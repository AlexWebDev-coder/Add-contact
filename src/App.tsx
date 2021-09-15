/** @format */

import { FC, useState } from "react";
import { ContactList } from "./components/ContactList";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { addContact } from "./redux-toolkit/contactReducer";
import "./App.css";
import { useAppDispatch } from "./hooks/hooks";

const App: FC = () => {
  const [user, setUser] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const dispatch = useAppDispatch();

  const addUser = () => {
    if (user && phone) {
      dispatch(
        addContact({
          id: Date.now(),
          name: user,
          number: phone,
        })
      );
      setUser("");
      setPhone("");
    } else alert("Empty fields are not allowed");
  };

  return (
    <div className="App">
      <Input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        prefix={<UserOutlined />}
        placeholder="User"
        size="large"
      />
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="number"
        prefix={<PhoneOutlined />}
        placeholder="Phone number"
        size="large"
      />
      <Button onClick={addUser} type="primary">
        Add Contact
      </Button>

      <ContactList />
    </div>
  );
};

export default App;
