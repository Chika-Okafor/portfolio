import { Stack } from "@mui/material";
import { useRef } from "react";
import HeroOverlay from "./hero-overlay";
import HeroUnderlay from "./hero-underlay";
import useScrollAnimation from "./hooks/use-scroll-animation";
import useOverlayVisibility from "./hooks/use-overlay-visibility";
import useUnderlayVisibility from "./hooks/use-underlay-visibility";

import styles from "./hero.module.scss";

const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScrollAnimation();
  const overlayAnimation = useOverlayVisibility({ ref, scrollY });
  const underlayAnimation = useUnderlayVisibility({ ref, scrollY });

  return (
    <Stack ref={ref} className={styles.heroWrapper}>
      <figure className={styles.hero}>
        <HeroOverlay scale={1 + scrollY * 0.008} animation={overlayAnimation} />
        <HeroUnderlay animation={underlayAnimation} />
      </figure>
    </Stack>
  );
};

export default Hero;
