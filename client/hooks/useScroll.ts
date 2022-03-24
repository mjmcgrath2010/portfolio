import { useState, useEffect } from "react";

type UseScrollThreshold = number;

const useScroll = (threshold: UseScrollThreshold) => {
  const [thresholdMet, setThresholdMet] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!thresholdMet && window.pageYOffset >= threshold) {
        setThresholdMet(true);
      } else if (thresholdMet && window.pageYOffset <= threshold) {
        setThresholdMet(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [thresholdMet, setThresholdMet, threshold]);

  return { thresholdMet, threshold };
};

export default useScroll;
