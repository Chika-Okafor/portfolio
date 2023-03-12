import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";

import "./HeroButton.scss";

const HeroButton = (): JSX.Element => {
  return (
    <motion.button data-testid="call-to-action" className="call-to-action">
      <PlayArrowIcon />
      <span>start here</span>
    </motion.button>
  );
};

export default HeroButton;
