import { AnimationControls } from "framer-motion";

export interface HeroOverlayProps {
  scale: number;
  animation: AnimationControls | { opacity: number };
}

export interface HeroUnderlayProps {
  animation: AnimationControls | { opacity: number };
}
