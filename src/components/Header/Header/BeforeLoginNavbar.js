import React from "react";
import "./BeforeLoginNavbar.css";
import { Redirect, useHistory } from "react-router-dom";

export const BeforeLoginNavbar = () => {
  const history = useHistory();

  const endSession = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("login");
  };

  return (
    <div className="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand artgallery" href="#">
          <span style={{ color: "#ff0000" }}>A</span>
          <span style={{ color: "#ff8700" }}>R</span>
          <span style={{ color: "#ffd300 " }}>T</span>
          <span> </span>
          <span style={{ color: "#deff0a " }}>G</span>
          <span style={{ color: "#a1ff0a" }}>A</span>
          <span style={{ color: "#0aff99" }}>L</span>
          <span style={{ color: "#0aefff" }}>L</span>
          <span style={{ color: "#147df5" }}>E</span>
          <span style={{ color: "#580aff " }}>R</span>
          <span style={{ color: "#be0aff" }}>Y</span>
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""></span>
          <h2>
            <i class="fas fa-chevron-circle-down" id="i"></i>
          </h2>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ">
              <h2>
                <a class="nav-link text-danger " href="/">
                  Home<span class="sr-only">(current)</span>
                </a>
              </h2>
            </li>

            <li class="nav-item active ">
              <a class="nav-link" href="/ProcuctPage">
                {" "}
                Gallery<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {" "}
                Auction
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                style
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                blog
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a href="login" id="btn" class="btn btn-outline-light ml-3">
              Login
            </a>
            <a href="Register" id="btn" class="btn btn-outline-light ml-3">
              Register
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};
