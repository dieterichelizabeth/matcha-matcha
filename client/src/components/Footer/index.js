import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2023 MatchaCo. All Rights Reserved.</p>
      <img
        src={require("../../assets/logo.png")}
        alt="a giant M and S"
        className="footer-logo"
      ></img>
      <div>
        <a href="/our-story">About Us</a>
        <span className="footer__link-divider"> | </span>
        <a
          href="https://github.com/dieterichelizabeth/matcha-matcha"
          rel="noopener noreferrer"
          target="_blank"
        >
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
