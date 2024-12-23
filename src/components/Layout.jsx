// Layout.jsx
// import React from "react";

import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
  return (
    <div className="flex bg-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="bg-[white] box-border flex justify-start items-stretch flex-col w-[1163px] pr-[3px] pb-[110px] rounded-[16px_0px_0px_16px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
