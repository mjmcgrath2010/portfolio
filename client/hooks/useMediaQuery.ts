import { useCallback, useEffect, useState } from "react";

type Props = {
  desktop?: number;
  mobile?: number;
  tablet?: number;
};

const useMediaQuery = ({
  desktop = 1024,
  mobile = 640,
  tablet = 768,
}: Props) => {
  const [size, setSize] = useState("");

  const setDimension = useCallback(() => {
    if (window.innerWidth <= mobile) {
      setSize("mobile");
    }

    if (window.innerWidth > tablet) {
      setSize("desktop");
    }

    if (window.innerWidth < desktop && window.innerWidth >= tablet) {
      setSize("tablet");
    }
  }, [setSize, desktop, mobile, tablet]);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [setDimension]);

  return {
    size,
  };
};

export default useMediaQuery;
