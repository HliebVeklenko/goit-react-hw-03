import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((user) => {
        return (
          <li key={user.id}>
            <Contact contact={user} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
