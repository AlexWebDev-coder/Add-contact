/** @format */

import { FC } from "react";
import { useAppSelector } from "../hooks/hooks";
import { ContactItem } from "./ContactItem";

const ContactList: FC = () => {
  const { contacts } = useAppSelector((state) => state.usersContact);

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export { ContactList };
