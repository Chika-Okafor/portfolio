import { useAnimation } from "framer-motion";
import { MutableRefObject, useCallback, useEffect } from "react";

export interface UseUnderlayVisibilityParams {
  ref: MutableRefObject<HTMLDivElement | null>;
  scrollY: number;
}

const useUnderlayVisibility = ({
  ref,
  scrollY,
}: UseUnderlayVisibilityParams) => {
  const underlayAnimation = useAnimation();

  const handleUnderlayVisibility = useCallback(() => {
    if (ref.current) {
      const { offsetTop, clientHeight } = ref.current;

      const underlayThreshold = offsetTop + clientHeight * 0.2;

      if (scrollY < underlayThreshold) {
        underlayAnimation.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
      } else {
        underlayAnimation.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
      }
    }
  }, [ref, scrollY, underlayAnimation]);

  useEffect(() => {
    window.addEventListener("scroll", handleUnderlayVisibility);
    return () => {
      window.removeEventListener("scroll", handleUnderlayVisibility);
    };
  }, [handleUnderlayVisibility]);

  return underlayAnimation;
};

export default useUnderlayVisibility;
