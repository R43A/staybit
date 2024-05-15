import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/pexels-ollivves-1078983.jpg";

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
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Booking
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 p-0">
            <div className="parent-img">
              <img
                src={backgroundImage}
                alt="backgroundImage"
                className="child-img img-fluid"
              />
              <div className="parent-txt">
                <h1 className="display-4">Enjoy your dream vacation</h1>
                <p className="para-txt">
                  Book Hotels, Flights and Stay packages at lowest price
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="parent-img">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
