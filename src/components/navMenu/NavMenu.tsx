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
      <motion.span
        className="nav-item"
        initial={false}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <NavLink
          className="nav-item-link"
          to={"/portfolio/bio"}
          onClick={toggleMenu}
        >
          BIO
        </NavLink>
      </motion.span>
      <motion.span
        className="nav-item"
        initial={false}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <NavLink
          className="nav-item-link"
          to={"/portfolio/skills"}
          onClick={toggleMenu}
        >
          SKILLS
        </NavLink>
      </motion.span>
      <motion.span
        className="nav-item"
        initial={false}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <NavLink
          className="nav-item-link"
          to={"/portfolio/projects"}
          onClick={toggleMenu}
        >
          PROJECTS
        </NavLink>
      </motion.span>
      <motion.span
        className="nav-item"
        initial={false}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <NavLink
          className="nav-item-link"
          to={"/portfolio/blog"}
          onClick={toggleMenu}
        >
          BLOG
        </NavLink>
      </motion.span>
    </motion.div>
  );
};

export default NavMenu;
