/** @format */

import { FC } from "react";
import { Card } from "antd";
import { removeContact } from "../redux-toolkit/contactReducer";
import { useAppDispatch } from "../hooks/hooks";

interface IContactProps {
  id: number;
  name: string;
  number: string;
}

const ContactItem: FC<IContactProps> = ({ name, number, id }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <span
        style={{ display: "flex", color: "red", cursor: "pointer" }}
        onClick={() => dispatch(removeContact({ id }))}
      >
        X
      </span>
      <Card className="card">
        <h1>Name: {name} </h1>
        <h1>Phone number: {number}</h1>
      </Card>
    </>
  );
};

export { ContactItem };
