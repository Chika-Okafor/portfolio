import { Typography } from "@mui/material";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC } from "react";
import {
  HERO_OVERLAY_TEXT_1,
  HERO_OVERLAY_TEXT_2,
  HERO_OVERLAY_TEXT_3,
} from "./constants";
import { HeroOverlayProps } from "./types";

import styles from "./hero-overlay.module.scss";

const HeroOverlay: FC<HeroOverlayProps> = ({ scale, animation }) => {
  return (
    <motion.div
      className={clsx(styles.heroOverlay, "app-padding")}
      data-testid="hero-overlay"
      style={{ scale, opacity: 0 }}
      animate={animation}
      layout
    >
      <Typography className={styles.heroOverlayText}>
        {HERO_OVERLAY_TEXT_1}
      </Typography>
      <Typography
        className={clsx(styles.heroOverlayText, styles.heroOverlayTextCenter)}
      >
        <span></span>
        {HERO_OVERLAY_TEXT_2}
      </Typography>
      <Typography className={styles.heroOverlayText}>
        {HERO_OVERLAY_TEXT_3}
      </Typography>
    </motion.div>
  );
};

export default HeroOverlay;
