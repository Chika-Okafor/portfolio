import { Menu, Close } from "@mui/icons-material";
import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext";

import "./Header.scss";

interface IProps {
  toggleMenu: any;
}

const Header = (props: IProps) => {
  const { toggleMenu } = props;

  const { menu, setMenu } = useContext(MenuContext);

  return (
    <header className="App-header">
      <span id="logo">CHIKA OKAFOR</span>
      {menu ? (
        <Menu className="nav-btn" onClick={toggleMenu} />
      ) : (
        <Close className="nav-btn" onClick={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
