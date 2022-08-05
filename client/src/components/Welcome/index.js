const Welcome = () => {
  function closeModal() {
    console.log("closing modal");
  }

  return (
    <div className="welcome-modal">
      <button onClick={closeModal}>X</button>
      <h2>Welcome 👋</h2>
      <p>
        This shop is a mock ecommerce site built as a personal project. This
        site does not sell the “products” listed.
      </p>
      <p>All “product” images come from Unsplash.</p>
      <p>
        This site utilizes a test API key for the mock payment platform.{" "}
        <b>DO NOT ENTER SENSITIVE PERSONAL INFORMATION IN THIS SITE.</b> (Credit
        Card numbers, Email, Passwords, and Usernames) Your input will not be
        secure.
      </p>
    </div>
  );
};

export default Welcome;
