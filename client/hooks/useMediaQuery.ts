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
  const [size, setSize] = useState("desktop");

  const setDimension = useCallback(() => {
    if (window.innerWidth <= mobile) {
      return setSize("mobile");
    }

    if (window.innerWidth < desktop && window.innerWidth >= tablet) {
      return setSize("tablet");
    }

    if (window.innerWidth > tablet) {
      return setSize("desktop");
    }
  }, [setSize, desktop, mobile, tablet]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [setDimension]);

  const defaultOpts = {
    desktop: false,
    mobile: false,
    tablet: false,
  };

  return {
    ...defaultOpts,
    ...{ [size]: true },
  };
};

export default useMediaQuery;
