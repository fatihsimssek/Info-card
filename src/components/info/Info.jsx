import "./style.css";
import fatih from "../../assets/images/fatih.jpg";
import Email from "../../assets/icons/email.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

const Info = () => {
  return (
    <section className="card-container">
      <img
        className="card-image"
        alt="fatih"
        src={fatih}
        width={318}
        height={318}
      />
      <div className="title-image">
        <h1 className="card-title">Mehmet Fatih Şimşek</h1>
        <p className="card-subtitle">Fullstack Developer, Geomatic Engineer</p>
        <p className="card-subtitle1">fatihsimssek.website</p>
        <div className="email-link">
          <button className="email-button">
            <a href="mailto:mm.fatihsimsek@gmail.com">
              {" "}
              <img src={Email} alt="Email" />
              Email
            </a>
          </button>
          <button className="linkedin-button">
            <a href="https://www.linkedin.com/in/mehmet-fatih-%C5%9Fim%C5%9Fek-15368b220/">
              <img src={Linkedin} alt="Linkedin" /> LinkedIn
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
