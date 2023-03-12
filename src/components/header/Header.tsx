import { Menu, Close } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../contexts/MenuContext";

import "./Header.scss";

interface IProps {
  toggleMenu: any;
}

const Header = (props: IProps) => {
  const { toggleMenu } = props;

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
