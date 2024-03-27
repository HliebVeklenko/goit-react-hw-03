import Contact from "../Contact/Contact";

function ContactList({ userData }) {
  return (
    <>
      {userData.map((user) => {
        return <Contact userData={user} key={user.id} />;
      })}
    </>
  );
}

export default ContactList;
