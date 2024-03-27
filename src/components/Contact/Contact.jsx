function Contact({ userData }) {
  return (
    <>
      <div>
        <p>{userData.name}</p>
        <p>{userData.number}</p>
        <button>Delete</button>
      </div>
    </>
  );
}

export default Contact;
