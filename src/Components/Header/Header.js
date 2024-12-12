import React from "react";
import logo from "./assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="d-flex pb-2 justify-content-between header sticky top-0 z-50">
        <NavLink to="/">
          <img src={logo} alt="Iskcon Logo" className="iskcon-logo" />
        </NavLink>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn donateBtn ml-auto">QUICK DONATE</button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white", fontSize: "20px" }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="navbar-collapse collapse" id="navbarSupportedContent ">
        <div className="pt-2 pb-2 nav-bar">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            HOME
          </NavLink>
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ABOUT
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/about" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">ABOUT ISKCON</span>
              </li>
            </NavLink>
            <NavLink
              to="/founder"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">FOUNDER ACHARYA</span>
              </li>
            </NavLink>
            <NavLink
              to="/philosophy"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">OUR PHILOSOPHY</span>
              </li>
            </NavLink>
            <NavLink
              to="/mission"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">OUR MISSION</span>
              </li>
            </NavLink>
          </ul>

          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TEMPLE
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/Arti" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">AARTI</span>
              </li>
            </NavLink>
            <NavLink
              to="/SaturdaySatsang"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">SATURDAY SATSANG</span>
              </li>
            </NavLink>
            <NavLink
              to="/SundayFeast"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">SUNDAY FEAST</span>
              </li>
            </NavLink>
          </ul>

          {/* <NavLink to="#" className="nav-link" activeClassName="active">
            TEMPLE
          </NavLink> */}
          {/* <NavLink to="#" className="nav-link" activeClassName="active">
            OUR PROGRAM
          </NavLink> */}
          <div
            className="nav-link dropdown-toggle"
            id="programDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            OUR PROGRAM
          </div>
          <ul className="dropdown-menu" aria-labelledby="programDropdown">
            <NavLink
              to="/YouthSeminar"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">YOUTH SEMINAR</span>
              </li>
            </NavLink>
            <NavLink
              to="/Counselling"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">COUNSELLING</span>
              </li>
            </NavLink>

            <NavLink
              to="/BhaktiVriksha"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">BHAKTI VRIKSH</span>
              </li>
            </NavLink>
            <NavLink
              to="/BhaktiSastri"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">BHAKTI SASTRI</span>
              </li>
            </NavLink>

            <NavLink
              to="/GitaForYou"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">GITA FOR YOU</span>
              </li>
            </NavLink>

            <NavLink
              to="/GopalaFunSchool"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">GOPALA FUN SCHOOL</span>
              </li>
            </NavLink>

            <NavLink
              to="/CorporateProgrammes"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">CORPORATE PROGRAMMES</span>
              </li>
            </NavLink>
            <NavLink to="/" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">SOCIAL WORK</span>
              </li>
            </NavLink>
          </ul>

          {/* <NavLink to="#" className="nav-link" activeClassName="active">
            SEVA OPPORTUNITIES
          </NavLink> */}
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            DONATE
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink
              to="/LifeMembership"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">LIFE MEMBERSHIP</span>
              </li>
            </NavLink>
            <NavLink
              to="/nitya-seva"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">NITYA SEVA</span>
              </li>
            </NavLink>
            <NavLink
              to="/GauSeva"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">GAU SEVA</span>
              </li>
            </NavLink>
            <NavLink
              to="/food-for-life"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">FOOD FOR LIFE ANNADAAN</span>
              </li>
            </NavLink>
            <NavLink to="/" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">VIGRAH SEVA</span>
              </li>
            </NavLink>
          </ul>
          <NavLink to="#" className="nav-link" activeClassName="active">
            SHOP
          </NavLink>
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SAMSKARA
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/kirtan-booking" className="nav-link" activeClassName="active">
              <li>
                <span className="dropdown-item">Book A Kirtan</span>
              </li>
            </NavLink>
            <NavLink
              to="/yagna-booking"
              className="nav-link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">Book Yagna</span>
              </li>
            </NavLink>
            
          </ul>
        </div>
      </div>

      <div className="hide fixed w-full z-50">
        <div className="pt-2 pb-2 nav-bar">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            HOME
          </NavLink>
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ABOUT
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/about" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">ABOUT ISKCON</span>
              </li>
            </NavLink>
            <NavLink
              to="/founder"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">FOUNDER ACHARYA</span>
              </li>
            </NavLink>
            <NavLink
              to="/philosophy"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">OUR PHILOSOPHY</span>
              </li>
            </NavLink>
            <NavLink
              to="/mission"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">OUR MISSION</span>
              </li>
            </NavLink>
          </ul>

          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TEMPLE
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/Arti" className="nav-link" activeClassName="active">
              <li>
                <span className="dropdown-item">AARTI</span>
              </li>
            </NavLink>
            <NavLink
              to="/SaturdaySatsang"
              className="nav-link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">SATURDAY SATSANG</span>
              </li>
            </NavLink>
            <NavLink
              to="/SundayFeast"
              className="nav-link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">SUNDAY FEAST</span>
              </li>
            </NavLink>
          </ul>

          {/* <NavLink to="#" className="nav-link" activeClassName="active">
            TEMPLE
          </NavLink> */}
          {/* <NavLink to="#" className="nav-link" activeClassName="active">
            OUR PROGRAM
          </NavLink> */}
          <div
            className="nav-link dropdown-toggle"
            id="programDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            OUR PROGRAM
          </div>
          <ul className="dropdown-menu" aria-labelledby="programDropdown">
            <li className="dropdown-submenu">
              <span className="dropdown-item">YOUTH PREACHING </span>
              <ul className="dropdown-menu">
                <NavLink
                  to="/YouthSeminar"
                  className="nav-link"
                  activeClassName="active"
                >
                  <li>
                    <span className="dropdown-item">YOUTH SEMINAR</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/Counselling"
                  className="nav-link"
                  activeClassName="active"
                >
                  <li>
                    <span className="dropdown-item">COUNSELLING</span>
                  </li>
                </NavLink>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <span className="dropdown-item">CONGREGATION PREACHING</span>
              <ul className="dropdown-menu">
                <NavLink
                  to="/BhaktiVriksha"
                  className="nav-link"
                  activeClassName="active"
                >
                  <li>
                    <span className="dropdown-item">BHAKTI VRIKSH</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/BhaktiSastri"
                  className="nav-link"
                  activeClassName="active"
                >
                  <li>
                    <span className="dropdown-item">BHAKTI SASTRI</span>
                  </li>
                </NavLink>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <span className="dropdown-item">BHAGVAD GITA COURSES</span>
              <ul className="dropdown-menu">
                <NavLink
                  to="/GitaForYou"
                  className="nav-link"
                  activeClassName="active"
                >
                  <li>
                    <span className="dropdown-item">GITA FOR YOU</span>
                  </li>
                </NavLink>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <span className="dropdown-item">CHILDREN PREACHING</span>
              <ul className="dropdown-menu">
                <NavLink
                  to="/GopalaFunSchool"
                  className="nav-link"
                  activeClassName="active"
                >
                  <li>
                    <span className="dropdown-item">GOPALA FUN SCHOOL</span>
                  </li>
                </NavLink>
              </ul>
            </li>

            <NavLink
              to="/CorporateProgrammes"
              className="nav-link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">CORPORATE PROGRAMMES</span>
              </li>
            </NavLink>
            <NavLink to="/" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">SOCIAL WORK</span>
              </li>
            </NavLink>
          </ul>

          {/* <NavLink to="#" className="nav-link" activeClassName="active">
            SEVA OPPORTUNITIES
          </NavLink> */}
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            DONATE
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink
              to="/LifeMembership"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">LIFE MEMBERSHIP</span>
              </li>
            </NavLink>
            <NavLink
              to="/nitya-seva"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">NITYA SEVA</span>
              </li>
            </NavLink>
            <NavLink
              to="/GauSeva"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">GAU SEVA</span>
              </li>
            </NavLink>
            <NavLink
              to="/food-for-life"
              className="nav-Link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">FOOD FOR LIFE ANNADAAN</span>
              </li>
            </NavLink>
            <NavLink to="/" className="nav-Link" activeClassName="active">
              <li>
                <span className="dropdown-item">VIGRAH SEVA</span>
              </li>
            </NavLink>
          </ul>
          <NavLink to="#" className="nav-link" activeClassName="active">
            SHOP
          </NavLink>
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SAMSKARA
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/kirtan-booking" className="nav-link" activeClassName="active">
              <li>
                <span className="dropdown-item">Book A Kirtan</span>
              </li>
            </NavLink>
            <NavLink
              to="/yagna-booking"
              className="nav-link"
              activeClassName="active"
            >
              <li>
                <span className="dropdown-item">Book Yagna</span>
              </li>
            </NavLink>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
