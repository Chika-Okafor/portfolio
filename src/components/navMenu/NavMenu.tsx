//DEPENDENCY IMPORTS
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// CONTEXT IMPORTS
import { MenuContext } from "../../contexts/MenuContext";

//STYLE IMPORTS
import "./NavMenu.scss";

//INTERFACE DEFINITIONS
interface IProps {
  toggleMenu: any;
}

const NavMenu = (props: IProps) => {
  //PROPS DECONSTRUCTION
  const { toggleMenu } = props;

  //SAVE CONTEXT STATE
  const { isMenuOpen } = useContext(MenuContext);

  //SET ANIMATION VARIANTS
  const menuSlideVariants = {
    open: { opacity: 1, x: "0%" },
    close: { opacity: 1, x: "-100%" },
  };

  return (
    <motion.div
      data-testid="nav-menu"
      id="nav-menu"
      initial={false}
      animate={isMenuOpen ? "open" : "close"}
      variants={menuSlideVariants}
    >
      <NavLink
        className="nav-item"
        to={"/portfolio/about"}
        onClick={toggleMenu}
      >
        <span>ABOUT</span>
      </NavLink>
      <NavLink className="nav-item" to={"/portfolio/work"} onClick={toggleMenu}>
        <span>WORK</span>
      </NavLink>
      <NavLink
        className="nav-item"
        to={"/portfolio/portfolio"}
        onClick={toggleMenu}
      >
        <span>PORTFOLIO</span>
      </NavLink>
      <NavLink className="nav-item" to={"/portfolio/blog"} onClick={toggleMenu}>
        <span>BLOG</span>
      </NavLink>
    </motion.div>
  );
};

export default NavMenu;
