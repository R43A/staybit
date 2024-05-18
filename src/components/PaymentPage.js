import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="nav-txt">
              <span className="stay-txt">Stay</span>
              <span className="bit-txt">Bit</span>
            </div>
          </Link>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundImage:
                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAdhAAAHYQGVw7i2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAEtJREFUOI1jZGBgCGNgYFBkIAweMjAwrMAmcYmBgeE/EfgKEZaMAnLBFQbiYgFrzDAyMDDEMDAw6FBg+SigFSA2aq8w4jCA2Ki9AgAa5SmSDueuuwAAAABJRU5ErkJggg==')",

              height: "16px", // Adjust height as needed
              backgroundSize: "cover",
              border: "none",
              borderRadius: "revert",
              boxShadow: "none",
            }}
          >
            {/* No need for content inside the button */}
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 p-0"></div>
          <div className="col-md-4 p-0"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
