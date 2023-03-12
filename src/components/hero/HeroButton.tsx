import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./HeroButton.scss";

const HeroButton = (): JSX.Element => {
  return (
    <Link
      to="/portfolio/bio"
      data-testid="call-to-action"
      className="call-to-action"
    >
      <motion.button className="call-to-action-button">Let's go!</motion.button>
    </Link>
  );
};

export default HeroButton;
