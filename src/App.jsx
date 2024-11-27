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
import Dashboard from "./pages/dashboard/dashboard/Dashboard";
import GovernanceStructure from "./pages/dashboard/governance-structure/governanceStructure";
import MetricsCollection from "./pages/dashboard/metrics-and-targets/metrics-collection";
import Targets from "./pages/dashboard/metrics-and-targets/targets";
import Report from "./pages/dashboard/report/report";
import Reporting from "./pages/dashboard/risk-managemnt/reporting";
import Settings from "./pages/dashboard/setting/setting";
import AnanlyseImpact from "./pages/dashboard/strategy/analyseImpact";
import CollectData from "./pages/dashboard/strategy/collectData";
import IdentifyRisksAndOpportunities from "./pages/dashboard/strategy/identifyRiskAndOpportunities";
import Manage from "./pages/dashboard/strategy/manage";
import Monitor from "./pages/dashboard/strategy/monitor";
import InformationRequest from "./pages/dashboard/tasks/information-request/InformationRequest";
import TaskManagement from "./pages/dashboard/tasks/task-management/TaskManagement";
import Layout from "./pages/dashboard/layout/Layout";

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
            <Route path="/" index element={<Dashboard />} />
            <Route
              path="/governance-structure"
              index
              element={<GovernanceStructure />}
            />
            <Route
              path="/metrics-collection"
              index
              element={<MetricsCollection />}
            />
            <Route path="/targets" index element={<Targets />} />
            <Route path="/report" index element={<Report />} />
            <Route path="/reporting" index element={<Reporting />} />
            <Route path="/setting" index element={<Settings />} />
            <Route path="/analyse-impact" index element={<AnanlyseImpact />} />
            <Route path="/collect-data" index element={<CollectData />} />
            <Route
              path="/identify-risks-and-opportunities"
              index
              element={<IdentifyRisksAndOpportunities />}
            />
            <Route path="/manage" index element={<Manage />} />
            <Route path="/monitor" index element={<Monitor />} />
            <Route
              path="/information-request"
              index
              element={<InformationRequest />}
            />
            <Route path="/task-management" index element={<TaskManagement />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
