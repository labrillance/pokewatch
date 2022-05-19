import React from "react";

export default function Layer({ children }: any) {
  return (
    <div className="flex flex-1 flex-row">
      <div className="w-[8vw] h-screen bg-[#202627]"></div>
      {children}
    </div>
  );
}
