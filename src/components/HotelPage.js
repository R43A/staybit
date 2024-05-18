import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage2 from "../images/pexels-medhat-ayad-122846-439227.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faShower,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const currentDate = new Date();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // State variables for check-in, check-out dates, and number of guests
  const [checkInDate, setCheckInDate] = useState(
    currentDate.toISOString().split("T")[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    tomorrowDate.toISOString().split("T")[0]
  );
  const [guests, setGuests] = useState(""); // Default number of guests is 1

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
          <div className="col-md-4 p-0">
            <div className="parent-img">
              <img
                src={backgroundImage2}
                alt="backgroundImage"
                className="child-img img-fluid"
                style={{ filter: "none", height: "100%" }}
              />

              <div className="side-head-cont" style={{ margin: "10px 31px" }}>
                <h1 className="display-4 side-txt">
                  kantiang View Resort - Mumbai, India
                </h1>
              </div>

              <div className="side-head-cont">
                <h1 className="display-4 side-txt">About</h1>
                {/* <p className="parent-side-p-txt">In Mumbai, India</p> */}
                <div
                  className="lst-cont m-0 p-0"
                  style={{ background: "none" }}
                >
                  <div className="parent-side-txt m-0">
                    <p className="child-side-p-txt">
                      Our bungalow-style haven offers panoramic views, luxurious
                      accommodations, and personalized service. Relax by the
                      infinity pool, indulge in gourmet dining, and explore the
                      natural wonders nearby. Experience Bay Area luxury at its
                      finest."
                    </p>
                    {/* <h6 className="parent-h6-cls">kantiang View Resort</h6> */}
                    {/* <p className="prc-txt">$25 / night</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0 scrollable-section">
            <div className="side-p-txt">
              <p>You've good taste</p>
            </div>
            <div className="parent-srch">
              {/* <input type="text" name="location" placeholder="Enter Location" /> */}

              <input
                type="date"
                name="checkInDate"
                className="date-input"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
              <input
                type="date"
                name="checkOutDate"
                className="date-input"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />

              <input
                type="text"
                name="guests"
                placeholder="1 Adult, 0 Children, 1 Room"
                className="guest-input"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />

              <Link className="src-btn d-flex justify-content-center">
                Book Now
              </Link>
            </div>
            {/* <div className="side-head-cont">
              <h1 className="display-4 side-txt">About</h1>
              <p className="parent-side-p-txt">In Mumbai, India</p>
              <div className="lst-cont m-0 p-0" style={{ background: "none" }}>
                <div className="parent-side-txt m-0">
                  <p className="child-side-p-txt">
                    Our bungalow-style haven offers panoramic views, luxurious
                    accommodations, and personalized service. Relax by the
                    infinity pool, indulge in gourmet dining, and explore the
                    natural wonders nearby. Experience Bay Area luxury at its
                    finest."
                  </p>
                  <h6 className="parent-h6-cls">kantiang View Resort</h6>
                  <p className="prc-txt">$25 / night</p>
                </div>
              </div>
            </div> */}
            <div className="side-head-cont mb-31">
              <h1 className="display-4 side-txt">Amenities</h1>
              {/* <p className="parent-side-p-txt">In Mumbai, India</p> */}
              <div
                className="lst-cont m-0 p-0 amnt-cont"
                style={{
                  background: "none",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div className="icn-cls">
                  <FontAwesomeIcon icon={faSnowflake} /> AC
                </div>
                <div className="icn-cls">
                  <FontAwesomeIcon icon={faShower} /> Geyser
                </div>
                <div className="icn-cls">
                  <FontAwesomeIcon icon={faBolt} /> Power backup
                </div>
              </div>
            </div>
            <div className="side-head-cont mb-31">
              <h1 className="display-4 side-txt">Hotel Policies</h1>
              {/* <p className="parent-side-p-txt">In Mumbai, India</p> */}
              <div
                className="lst-cont m-0 p-0 amnt-cont"
                style={{
                  background: "none",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <ul>
                  <li class="child-side-p-txt">
                    Guests can check in using any local or outstation ID proof
                    (PAN card not accepted).
                  </li>
                  {/* <li class="child-side-p-txt">
                    As a complimentary benefit, your stay is now insured by
                    Acko.
                  </li> */}
                  {/* <li class="child-side-p-txt">
                    This hotel is serviced under the trade name of Purvanchal
                    Inn as per quality standards of OYO
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
