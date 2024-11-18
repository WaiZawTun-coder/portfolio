import React from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
