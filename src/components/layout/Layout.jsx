import React, { useEffect, useRef, useCallback } from "react";
import Header from "./Header";

const Layout = ({ children, isHome = true }) => {
  return (
    <div className="min-h-screen bg-zinc-50">
      {isHome ? <Header /> : null}
      <main className="mx-auto flex w-full flex-col">{children}</main>
    </div>
  );
};

export default Layout;
