import React from "react";
import "./TopBar.css";
import user1 from "../../../assets/user-1.jpg";
import { useDetectClickOutside } from "react-detect-click-outside";
import Tabs from "../tabs/Tabs";

const TopBar = () => {
  const [showUserProfile, setShowUserProfile] = React.useState(false);
  function closeUserProfileDropDown() {
    setShowUserProfile(false);
  }
  const userRef = useDetectClickOutside({
    onTriggered: closeUserProfileDropDown,
  });

  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light  navbarWrapMain">
        <Tabs />

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
                    <div className="notification-wrap" aria-labelledby="drop2">
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="">
                        <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src={user1}
                              alt="user"
                              className="rounded-circle"
                              width="48"
                              height="48"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle">
                            <h6 className="mb-1 fw-semibold">
                              Roman Joined the Team!
                            </h6>
                            <span className="d-block">Congratulate him</span>
                          </div>
                        </a>
                        <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src={user1}
                              alt="user"
                              className="rounded-circle"
                              width="48"
                              height="48"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle">
                            <h6 className="mb-1 fw-semibold">New message</h6>
                            <span className="d-block">Job Completed</span>
                          </div>
                        </a>
                        <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src={user1}
                              alt="user"
                              className="rounded-circle"
                              width="48"
                              height="48"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle">
                            <h6 className="mb-1 fw-semibold">
                              Bianca sent payment
                            </h6>
                            <span className="d-block">Check your earnings</span>
                          </div>
                        </a>
                        <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src={user1}
                              alt="user"
                              className="rounded-circle"
                              width="48"
                              height="48"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle">
                            <h6 className="mb-1 fw-semibold">
                              Jolly completed tasks
                            </h6>
                            <span className="d-block">
                              Assign her new tasks
                            </span>
                          </div>
                        </a>
                        <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src={user1}
                              alt="user"
                              className="rounded-circle"
                              width="48"
                              height="48"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle">
                            <h6 className="mb-1 fw-semibold">
                              John received payment
                            </h6>
                            <span className="d-block">$230 deducted</span>
                          </div>
                        </a>
                        <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src={user1}
                              alt="user"
                              className="rounded-circle"
                              width="48"
                              height="48"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle">
                            <h6 className="mb-1 fw-semibold">
                              Roman Joined the Team!
                            </h6>
                            <span className="d-block">Congratulate him</span>
                          </div>
                        </a>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          {" "}
                          See All Notifications{" "}
                        </button>
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
