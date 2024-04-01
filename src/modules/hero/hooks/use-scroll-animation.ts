import { useCallback, useEffect, useState } from "react";

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setScale(1 + scrollY * 0.008);
  }, [scrollY]);

  return {
    scrollY,
    scale,
  };
};

export default useScrollAnimation;
