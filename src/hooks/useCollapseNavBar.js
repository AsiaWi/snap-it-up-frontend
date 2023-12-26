import { useEffect, useRef, useState } from "react";

const useCollapseNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleCollapseNavBar = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCollapsed(false);
      }
    };

    document.addEventListener("mouseup", handleCollapseNavBar);
    return () => {
      document.removeEventListener("mouseup", handleCollapseNavBar);
    };
  }, [ref]);

  return { collapsed, setCollapsed, ref };
};

export default useCollapseNavBar;
