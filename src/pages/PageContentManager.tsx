import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

//DEPENDENCY IMPORTS

// CONTEXT IMPORTS
import { MenuContext } from "../contexts/MenuContext";

//COMPONENT IMPORTS
import About from "./About";
import Work from "./Work";
import Portfolio from "./Portfolio";
import Default404 from "./404";
import Blog from "./Blog";

//STYLE IMPORTS
import "./PageContentManager.scss";
import Home from "./Home";

const PageContentManager = () => {
  //SAVE CONTEXT STATE
  const { isMenuOpen } = useContext(MenuContext);

  //SET ANIMATION VARIANTS
  const pageSlideVariants = {
    pullIn: { opacity: 1, x: "100%", delayChildren: 5 },
    pullOut: { opacity: 1, x: "0%", delayChildren: 5 },
  };

  return (
    <motion.div
      id="pages"
      data-testid="page-content-manager"
      initial={false}
      animate={isMenuOpen ? "pullIn" : "pullOut"}
      // transition={{ type: "spring", damping: 10, stiffness: 100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      // exit={{ display: "none" }}
      variants={pageSlideVariants}
      layout
    >
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/home" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path={`/portfolio/work`} element={<Work />} />
        <Route path={`/portfolio/portfolio`} element={<Portfolio />} />
        <Route path="/portfolio/blog" element={<Blog />} />
        <Route path="*" element={<Default404 />} />
      </Routes>
    </motion.div>
  );
};

export default PageContentManager;
