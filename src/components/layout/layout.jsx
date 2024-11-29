import React from "react";
import { useSelector } from "react-redux";
import TopBar from "../../components/common/top-bar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/common/sidebar/Sidebar";
import RightDrawer from ".././common/right-drawer/RightDrawer";

const Layout = () => {
  let { showSidebar, open } = useSelector((state) => state.common);
  return (
    <React.Fragment>
      {open && <RightDrawer />}
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
