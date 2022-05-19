import React, { useEffect, useState } from "react";

export default function Layer({ children }: any) {
  const [width, setWidth] = useState<number>(-1);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  const isMobile = width <= 768;

  return (
    <div className="flex flex-1 flex-row">
      {!isMobile && <div className="w-[8vw] h-screen bg-[#202627]"></div>}
      {children}
    </div>
  );
}
