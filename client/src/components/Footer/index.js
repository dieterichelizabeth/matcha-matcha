const Footer = () => {
  return (
    <div className="footer">
      <p>© 2022 MatchaCo.</p>
      <img
        src={require("../assets/logo.png")}
        alt="a giant M and S"
        className="footer-logo"
      ></img>
      <a href="https://github.com/dieterichelizabeth/matcha-matcha">
        Github Repo
      </a>
    </div>
  );
};

export default Footer;
