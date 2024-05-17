import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/pexels-ollivves-1078983.jpg";
import contentImage from "../images/pexels-boonkong-boonpeng-442952-1134176.jpg";
import contentImage2 from "../images/pexels-quang-nguyen-vinh-222549-14012230.jpg";
import contentImage3 from "../images/pexels-pixabay-258154.jpg";

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
  const [guests, setGuests] = useState(null); // Default number of guests is 1

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
          <div className="col-md-4 p-0 scrollable-section">
            <div className="side-p-txt">
              <p>Find your stay</p>
            </div>
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

              <input
                type="text"
                name="guests"
                placeholder="1 Adult, 0 Children, 1 Room"
                className="guest-input"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />

              <button className="src-btn" onClick={handleSearch}>
                Search
              </button>
            </div>

            <div className="side-head-cont">
              <h1 className="display-4 side-txt">Popular Stays</h1>
              <p className="parent-side-p-txt">In Mumbai, India</p>
              <Link to="/" className="lst-cont">
                <img
                  src={contentImage}
                  alt="contentImage"
                  className="img-fluid child-cont-img"
                />
                <div className="parent-side-txt">
                  <p className="child-side-p-txt">Entire bunglow in bay area</p>
                  <h6 className="parent-h6-cls">kantiang View Resort</h6>
                  <p className="prc-txt">$25 / night</p>
                </div>
              </Link>
              <Link to="/" className="lst-cont">
                <img
                  src={contentImage2}
                  alt="contentImage"
                  className="img-fluid child-cont-img"
                />
                <div className="parent-side-txt">
                  <p className="child-side-p-txt">Entire bunglow in bay area</p>
                  <h6 className="parent-h6-cls">Gloriya Hillside Villa</h6>
                  <p className="prc-txt">$60 / night</p>
                </div>
              </Link>
            </div>
            <div className="side-head-cont">
              <h1 className="display-4 side-txt">Explore More</h1>
              <p className="parent-side-p-txt">People Also Love This</p>

              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={contentImage}
                      className="d-block w-100 img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={contentImage2}
                      className="d-block w-100 img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={contentImage3}
                      className="d-block w-100 img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
