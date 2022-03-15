import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        <a className="title__a" href="https://www.kswofmadisonheights.com/">
          MADISON HEIGHTS KOREAN MARTIAL ARTS
        </a>
      </h1>
      <nav id="main-menu" className="nav">
        <ul className="navbar">
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/" aria-current="page">
              “어서오세요”
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/about/">
              What is Kuk Sool Won?
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/faqs/">
              Korean Martial Arts History
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/our-school/">
              Our School
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/calendar/">
              *CLASS SCHEDULE!*
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/instructors/">
              Instructor
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/belts-and-ranks/">
              Belts &amp; Ranks
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/specials/">Specials</a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/testimonials/">
              Testimonials
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/contact-us/">
              Contact Us
            </a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/location/">Location</a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/photos/">Photos</a>
          </li>
          <li className="nav-link">
            <a href="https://www.kswofmadisonheights.com/demos/">Demos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
