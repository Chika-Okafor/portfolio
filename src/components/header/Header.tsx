//DEPENDENCY IMPORTS
import { Menu, Close } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";

//CONTEXT IMPORTS
import { MenuContext } from "../../contexts/MenuContext";

//STYLE IMPORTS
import "./Header.scss";

//INTERFACE DEFINITIONS
interface IProps {
  toggleMenu: any;
}

const Header = (props: IProps) => {
  //PROPS DECONSTRUCTION
  const { toggleMenu } = props;

  //SAVE CONTEXT STATE
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <header className="app-header">
      <Link
        id="logo"
        to={"/portfolio/"}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        CHIKA OKAFOR
      </Link>
      {isMenuOpen ? (
        <Close className="nav-btn" onClick={toggleMenu} />
      ) : (
        <Menu className="nav-btn" onClick={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
