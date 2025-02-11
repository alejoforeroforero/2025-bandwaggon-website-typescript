import { Link } from "react-router-dom";

import footerIcon from "@/assets/bandwaggon-logo-type-footer.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-section-logo">
          <figure>
            <img src={footerIcon} alt={`bandwaggon logo`} />
          </figure>
        </div>
        <div className="footer-section-links">
          <div>
            <Link to="manifesto">MANIFESTO</Link>
          </div>
          <div>
            <Link to="how-it-works">HOW IT WORKS</Link>
            <Link to="artist">ARTIST</Link>
            <Link to="labels">LABELS</Link>
          </div>
          <div>
            <Link to="contact">CONTACT</Link>
          </div>
          <div>
            <a
              href="https://www.instagram.com/alejoforeroforero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.instagram.com/alejoforeroforero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
