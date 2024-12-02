import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "./global-redux/reducers/common/slice";
import NotFound from "./components/common/not-found/index";
import Layout from "./components/layout/layout";
import Alarms from "./pages/alarms/alarms";
import Events from "./pages/events/events";
import Help from "./pages/help/help";
import Reports from "./pages/reports/reports";
import Map from "./pages/map/map";
import AppSettings from "./pages/configure/app-settings";
import DatabaseSettings from "./pages/configure/database-settings";
import EmailSettings from "./pages/configure/email-settings";
import RemoveHosts from "./pages/configure/remove-host/remove-hosts";

const App = () => {
  const dispatch = useDispatch();
  const { menuItems } = useSelector((state) => state.common);

  useEffect(() => {
    const mainActiveLink = menuItems?.find(
      (item) => item?.route === window.location.pathname
    );
    if (mainActiveLink) {
      dispatch(changeActiveLink(mainActiveLink?.id));
    }
    if (!mainActiveLink) {
      const filteredItems = menuItems?.filter((item) => item?.subMenu);
      filteredItems.forEach((element) => {
        element?.subMenu?.forEach((subItem) => {
          if (subItem.route === window.location.pathname) {
            dispatch(changeActiveLink(subItem.id));
            dispatch(InitialLoadSidebarActiveLink(element?.id));
          }
        });
      });
    }
  }, [dispatch]);

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<RemoveHosts />} />
            <Route path="/app-settings" index element={<AppSettings />} />
            <Route
              path="/database-settings"
              index
              element={<DatabaseSettings />}
            />
            <Route path="/email-settings" index element={<EmailSettings />} />
            <Route path="/alarms" index element={<Alarms />} />
            <Route path="/help" index element={<Help />} />
            <Route path="/events" index element={<Events />} />
            <Route path="/map" index element={<Map />} />
            <Route path="/reports" index element={<Reports />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
