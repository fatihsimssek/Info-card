import "./style.css";
import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Github from "../../assets/icons/github.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <a
        className="twitter-link"
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Twitter} alt="Twitter" width={40} height={40} />
      </a>
      <a
        className="twitter-link"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Facebook} alt="Facebook" width={40} height={40} />
      </a>
      <a
        className="twitter-link"
        href="https://www.instagram.com/fatihsimssek/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="Instagram" width={40} height={40} />
      </a>
      <a
        className="twitter-link"
        href="https://github.com/fatihsimssek"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="Github" width={40} height={40} />
      </a>
    </div>
  );
};

export default Footer;
