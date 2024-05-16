import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/pexels-ollivves-1078983.jpg";

function HomePage() {
  const currentDate = new Date();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // State variables for check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState(
    currentDate.toISOString().split("T")[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    tomorrowDate.toISOString().split("T")[0]
  );

  // Function to handle search button click
  const handleSearch = () => {
    // Search logic here
  };

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
                <div className="parent-lnk">
                  <Link to="/" className="child-lnk">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="parent-srch">
              <input type="text" name="location" placeholder="Enter Location" />

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

              <button className="src-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
