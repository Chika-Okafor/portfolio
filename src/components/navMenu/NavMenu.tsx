import { motion } from "framer-motion";

import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";

import "./NavMenu.scss";

interface IProps {}

const NavMenu = (props: IProps) => {
  const { menu, setMenu } = useContext(MenuContext);

  const menuVariants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 1, x: "-100%" },
  };

  return (
    <motion.div
      id="nav-menu"
      animate={menu ? "closed" : "open"}
      variants={menuVariants}
    >
      <span className="nav-item">ABOUT</span>
      <span className="nav-item">WORK</span>
      <span className="nav-item">PORTFOLIO</span>
    </motion.div>
  );
};

export default NavMenu;
