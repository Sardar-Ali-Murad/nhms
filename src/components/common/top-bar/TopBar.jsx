import React from "react";
import "./TopBar.css";
import user1 from "../../../assets/user-1.jpg";
import logo from "../../../assets/light-logo-.png";
import { changeShowSidebar } from "../../../global-redux/reducers/common/slice";
import nadraLogo from "../../../assets/logo.png";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useDispatch, useSelector } from "react-redux";

const TopBar = () => {
  const dispatch = useDispatch();
  const [showUserProfile, setShowUserProfile] = React.useState(false);
  function closeUserProfileDropDown() {
    setShowUserProfile(false);
  }
  const { showSidebar } = useSelector((state) => state.common);
  const userRef = useDetectClickOutside({
    onTriggered: closeUserProfileDropDown,
  });

  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light  navbarWrapMain">
        <div>
          <img src={logo} className="light-logo" width="110" alt="" />
        </div>

        <button
          className="btn  ml-100"
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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="d-flex align-items-center justify-content-between">
            <a
              className="nav-link d-flex d-lg-none align-items-center justify-content-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobilenavbar"
              aria-controls="offcanvasWithBothOptions"
            ></a>
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
              <img src={nadraLogo} className="h-60 w-60 py-1 px-2" />
              <select
                className="form-select me-4 h-40 w-200"
                aria-label="Default select example"
              >
                <option value="">select company</option>
                <option>Nadra</option>
                <option>Nadra</option>
                <option>Nadra</option>
              </select>

              <select
                className="form-select me-4 h-40"
                aria-label="Default select example"
              >
                <option value="">Select Year</option>
                <option value="2028">2028</option>
                <option value="2027">2027</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>

              <li className="nav-item dropdown">
                <a
                  className="nav-link pe-0"
                  id="drop1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ref={userRef}
                  onClick={() => {
                    setShowUserProfile((pre) => !pre);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div className="user-profile-img w-32">
                      <img
                        src={user1}
                        className="rounded-circle"
                        width="35"
                        height="35"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
                {showUserProfile && (
                  <div
                    className="px-4 content-dd dropdown-menu-end  dropdown-menu-animate-up user-profile-dropdown absolute left-300"
                    aria-labelledby="drop1"
                  >
                    <div data-simplebar="">
                      <div className="py-3  pb-0">
                        <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
                      </div>
                      <div className="d-flex align-items-center py-9 border-bottom">
                        <img
                          src={user1}
                          className="rounded-circle"
                          width="80"
                          height="80"
                          alt=""
                        />
                        <div className="ms-3 w-200">
                          <span className="mb-1 d-block text-dark">
                            John Doe
                          </span>
                          <p className="mb-0 d-flex text-dark align-items-center gap-2 word-break ">
                            <i className="fa fa-envelope fs-4"></i>{" "}
                            info@abilite.com
                          </p>
                        </div>
                      </div>
                      <div className="message-body d-grid hidden">
                        <div className="py-8  mt-8 d-flex align-items-center">
                          <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                            <FontAwesomeIcon
                              icon={faIdBadge}
                              style={{ fontSize: "30px" }}
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 bg-hover-primary fw-semibold">
                              My Profile{" "}
                            </h6>
                            <span className="d-block text-dark">
                              Account Settings
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
