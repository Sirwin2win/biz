import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/cute-kid-with-abacus-studio.jpg";
import "../styles/style.css";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div id="container">
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} id="logo" alt="logo" />
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="yes">
              <li className="nav-item lin">
                <Link
                  className="nav-link active txt"
                  aria-current="page"
                  to="/"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item lin">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item lin">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ color: "white" }}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item lin">
                <Link
                  className="nav-link"
                  to="/product"
                  style={{ color: "white" }}
                >
                  Products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
