import { useAnimation } from "framer-motion";
import { MutableRefObject, useCallback, useEffect } from "react";

export interface UseOverlayVisibilityParams {
  ref: MutableRefObject<HTMLDivElement | null>;
  scrollY: number;
}

const useOverlayVisibility = ({ ref, scrollY }: UseOverlayVisibilityParams) => {
  const overlayAnimation = useAnimation();

  const handleOverlayVisibility = useCallback(() => {
    if (ref.current) {
      const { offsetTop, clientHeight } = ref.current;

      const overlayThreshold = offsetTop + clientHeight * 0.5;

      if (scrollY < overlayThreshold) {
        overlayAnimation.start({ opacity: 1, transition: { duration: 0.5 } });
      } else {
        overlayAnimation.start({ opacity: 0, transition: { duration: 0.5 } });
      }
    }
  }, [ref, scrollY, overlayAnimation]);

  useEffect(() => {
    window.addEventListener("scroll", handleOverlayVisibility);
    return () => {
      window.removeEventListener("scroll", handleOverlayVisibility);
    };
  }, [handleOverlayVisibility]);

  return overlayAnimation;
};

export default useOverlayVisibility;
