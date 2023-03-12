import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext";

import Bio from "./../Bio";
import Skills from "./../Skills";
import Error404 from "./../Error404";
import Blog from "./../Blog";
import Home from "./../Home";
import Projects from "./../Projects";

import "./PageContentManager.scss";

const PageContentManager = (): JSX.Element => {
  const { isMenuOpen } = useContext(MenuContext);

  const pageSlideVariants = {
    pushOut: { opacity: 1, x: "100%", delayChildren: 5 },
    pullIn: { opacity: 1, x: "0%", delayChildren: 5 },
  };

  return (
    <motion.div
      id="pages"
      data-testid="page-content-manager"
      initial={false}
      animate={isMenuOpen ? "pushOut" : "pullIn"}
      // transition={{ type: "spring", damping: 10, stiffness: 100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      // exit={isMenuOpen ? { scaleX: "100%" } : { scaleX: 0 }}
      variants={pageSlideVariants}
      layout
    >
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/home" element={<Home />} />
        <Route path="/portfolio/bio" element={<Bio />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/blog" element={<Blog />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </motion.div>
  );
};

export default PageContentManager;
