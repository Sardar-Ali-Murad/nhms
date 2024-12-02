import React from "react";
import "./TopBar.css";
import Tabs from "../tabs/Tabs";

const TopBar = () => {
  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light  navbarWrapMain">
        <Tabs />
      </nav>
    </header>
  );
};

export default TopBar;
