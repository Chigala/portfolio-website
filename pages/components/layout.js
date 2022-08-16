import React from "react";
import { useState } from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import HamburgerMenu from "./hamburger-menu";

const Layout = ({ children }) => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div>
      <NavBar
        showHamburger={showHamburger}
        setShowHamburger={setShowHamburger}
      />
      {showHamburger && (
        <HamburgerMenu
          showHamburger={showHamburger}
          setShowHamburger={setShowHamburger}
        />
      )}
      <main className="bg-black pl-9 pr-6 lg:pl-36  lg:pr-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
