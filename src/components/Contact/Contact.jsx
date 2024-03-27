import css from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.contacts}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button
        className={css.button}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
