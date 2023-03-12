import { currentYear } from "../../helpers/DateHelpers";
import "./Footer.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className="App-footer">
      <span className="copyright">© {currentYear()} CHIKA OKAFOR</span>
    </footer>
  );
};

export default Footer;
