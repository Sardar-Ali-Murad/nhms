import React from "react";
import { useSelector } from "react-redux";
import TopBar from "../../components/common/top-bar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/common/sidebar/Sidebar";

const Layout = () => {
  let { showSidebar } = useSelector((state) => state.common);
  return (
    <React.Fragment>
      <TopBar />
      <div className="flex">
        <SideBar />
        <div
          className="row"
          id={showSidebar ? "SideComponents" : "SideComponentsFullWidth"}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;