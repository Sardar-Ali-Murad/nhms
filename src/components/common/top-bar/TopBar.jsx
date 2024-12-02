import React from "react";
import "./TopBar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeShowSidebar } from "../../../global-redux/reducers/common/slice";

const TopBar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.common);

  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light  navbarWrapMain">
        <button
          className="btn btn-light"
          onClick={() => dispatch(changeShowSidebar(!showSidebar))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default TopBar;
