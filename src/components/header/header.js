import React from "react";
import banner from "../../assets/kuk-sool-img.jpg";
import flag from "../../assets/flag.png";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <span className="flag-wrapper">
        <img className="flag" src={flag} alt="flag" />

        <div>
          <h1 className="title">
            <NavLink className="title__a" to="/" activeClassName="white">
              MADISON HEIGHTS KOREAN MARTIAL ARTS
            </NavLink>
          </h1>
          <nav id="main-menu" className="nav">
            <ul className="navbar">
              <li className="nav-link">
                <NavLink to="/" aria-current="page" activeClassName="white">
                  “어서오세요”
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/about" activeClassName="white">
                  What is Kuk Sool Won?
                </NavLink>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/faqs/"
                  activeClassName="white"
                >
                  Korean Martial Arts History
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/our-school/"
                  activeClassName="white"
                >
                  Our School
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/calendar/"
                  activeClassName="white"
                >
                  *CLASS SCHEDULE!*
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/instructors/"
                  activeClassName="white"
                >
                  Instructor
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/belts-and-ranks/"
                  activeClassName="white"
                >
                  Belts &amp; Ranks
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/specials/"
                  activeClassName="white"
                >
                  Specials
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/testimonials/"
                  activeClassName="white"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/contact-us/"
                  activeClassName="white"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="https://www.kswofmadisonheights.com/location/"
                  activeClassName="white"
                >
                  Location
                </a>
              </li>
              <li className="nav-link">
                <a href="https://www.kswofmadisonheights.com/photos/">Photos</a>
              </li>
              <li className="nav-link">
                <a href="https://www.kswofmadisonheights.com/demos/">Demos</a>
              </li>
            </ul>
          </nav>
        </div>
        <img className="flag" src={flag} alt="flag" />
        {/* <img src={banner} alt="banner" /> */}
      </span>
    </header>
  );
};

export default Header;
