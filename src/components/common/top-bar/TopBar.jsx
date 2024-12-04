import React from "react";
import "./TopBar.css";
import Tabs from "../tabs/tabs";
import logo from "../../../assets/logo.png";

const TopBar = () => {
  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light  navbarWrapMain">
        <div style={{marginRight:"20px"}}>
          <img src={logo} className="light-logo h-60 w-60 mr-4" width="110" alt="" />
        </div>
        <div className="pl-4">
        <Tabs />
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
