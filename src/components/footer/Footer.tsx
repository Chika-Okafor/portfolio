//DEPENDENCY IMPORTS
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

//STYLE IMPORTS
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="App-footer">
      <span className="socials">
        <Instagram className="social-icon" />
        <LinkedIn className="social-icon" />
        <GitHub className="social-icon" />
      </span>
      <span className="copyright">© 2022 CHIKA OKAFOR</span>
    </footer>
  );
};

export default Footer;
