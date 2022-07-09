import React, { useEffect, useState } from "react";
import { removeUserSession, getToken } from "../../../Utils/Common";
import axios from "axios";

const NavBar = () => {
  const [loggedin, setloggedin] = useState(false);
  useEffect(() => {
    const token = getToken();
    setloggedin(token);
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000/users/logout")
      .then((response) => {
        removeUserSession();
        setloggedin(false);
        window.location = `/`;
        alert("Successfully logged out");
      })
      .catch((error) => {
        if (error.response) {
          // if (error.response.status === 401) setError(error.response.data.message);
          // else setFormError("Something went wrong. Please try again later.");
        } else if (error.request) {
        } else {
        }
      });
    // window.location = `/`;
  };

  const CheckLoggedin = () => {
    return (
      <div>
        {loggedin ? (
          <div>
            <a
              type="button"
              class="btn btn-outline-primary"
              style={{ marginRight: "10px", borderRadius: "30px" }}
              href="/userProfile"
            >
              <i class="fas fa-user-circle"></i>
            </a>
            <button
              className="btn btn-outline-warning"
              type="submit"
              onClick={handleLogout}
            >
              <i class="fas fa-sign-out-alt" /> Logout
            </button>
          </div>
        ) : (
          <div>
            <a
              className="btn btn-outline-warning"
              href="/login"
              style={{ marginRight: "10px" }}
            >
              <i className="fas fa-sign-in-alt" /> Login
            </a>
            <a className="btn btn-outline-warning" href="/register">
              <i className="fas fa-user-plus" /> Register
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          IC-AF
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/events">
                    Workshops
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/events">
                    conferences
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Materials
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/materials">
                    Workshop Papers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/materials">
                    Research Papers
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
            </li>
          </ul>
          <CheckLoggedin />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
