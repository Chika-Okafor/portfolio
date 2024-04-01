import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";
import { HERO_LOGO_ALT_TEXT } from "./constants";
import { HeroUnderlayProps } from "./types";

import heroLogo from "../../assets/img/logo-wrapped-1.png";

import styles from "./hero-underlay.module.scss";

const HeroUnderlay: FC<HeroUnderlayProps> = ({ animation }) => {
  return (
    <motion.div
      className={styles.heroUnderlay}
      data-testId="hero-underlay"
      style={{ opacity: 0 }}
      animate={animation}
      layout
    >
      <Stack className={styles.heroUnderlayImageWrapper}>
        <img
          className={styles.heroUnderlayImage}
          src={heroLogo}
          alt={HERO_LOGO_ALT_TEXT}
        />
      </Stack>
    </motion.div>
  );
};

export default HeroUnderlay;
