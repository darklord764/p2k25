import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import PragyaaLogo from "../assets/pragyaa.png";
import MenuIcon from "../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import { scroller } from "react-scroll";
import Squares from "../Background/Squares";
import Team from "../Team/Team";
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="styled-button">
        Register Now
        <div className="inner-button">
          <svg id="Arrow" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" className="icon">
            <defs>
              <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
                <stop style={{stopColor: '#FFFFFF', stopOpacity: 1}} offset="0%" />
                <stop style={{stopColor: '#AAAAAA', stopOpacity: 1}} offset="100%" />
              </linearGradient>
            </defs>
            <path fill="url(#iconGradient)" d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .styled-button {
    position: relative;
 padding: 0.5rem ; /* Reduced padding */
  font-size: 0.75rem; 
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to bottom, #171717, #242424);
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #292929;
        &:hover {
      background: linear-gradient(to bottom, #242424, #171717);
      transform: scale(1.05);
      transform: translateY(-0.2rem);
      box-shadow: inset -2px -2px rgba(255,255,255, .1);
    }
  }

  .styled-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(to bottom, #292929, #000000);
    z-index: -1;
    border-radius: 9999px;
    transition: all 0.2s ease;
    opacity: 1;
  }

  .styled-button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 1), 0 5px 10px rgba(0, 0, 0, 0.4);
  }

  .styled-button .inner-button {
    position: relative; /* Ensure relative positioning for pseudo-element */
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #171717, #242424);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 1);
    border: 1px solid #252525;
    transition: all 0.2s ease;
  }

  .styled-button .inner-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(to bottom, #292929, #000000);
    z-index: -1;
    border-radius: 9999px;
    transition: all 0.2s ease;
    opacity: 1;
  }
  .styled-button .inner-button .icon {
    filter: drop-shadow(0 10px 20px rgba(26, 25, 25, 0.9))
      drop-shadow(0 0 4px rgba(0, 0, 0, 1));
    transition: all 0.4s ease-in-out;
  }
  .styled-button .inner-button .icon:hover {
    filter: drop-shadow(0 10px 20px rgba(50, 50, 50, 1))
      drop-shadow(0 0 20px rgba(2, 2, 2, 1));
    transform: rotate(-35deg);
  }`;


const Header = ({ isHomePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path, sectionId) => {
    const mobileNav = document.querySelector(".navbar-mobile");
    if (mobileNav) {
      mobileNav.classList.add("closing");
      setTimeout(() => {
        mobileNav.classList.remove("closing");
      }, 300);
    }

    if (location.pathname === "/" && sectionId) {
      scroller.scrollTo(sectionId, { smooth: true, duration: 200 });
    } else if (path === "/" && sectionId) {
      navigate(path);
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 200 });
      }, 100);
    } else {
      navigate(path);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrollDirection === "down" ? "hidden" : ""}`} style={{ whiteSpace: "nowrap" }}>
      <nav id="navbar" className="navbar">
        <div id="logo" className="me-auto">
          <button onClick={() => handleNavigation("/", "contentBox")}>
            <img
              src="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229295/your-cloudinary-folder-name/vvsllhpqclla1zug3ave.png"
              className="logo"
              alt="Pragyaa Logo"
              style={{ height: "7rem" }}
            />
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className={`navbar-nav ${menuOpen ? "open" : ""}`}>

          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/schedule")}
            >
              SCHEDULE
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/team")}
            >
              TEAM
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/events")}
            >
              EVENTS
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "gallery")}
            >
              GALLERY
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "sponsors")}
            >
              SPONSORS
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "faqs")}
            >
              FAQ's
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "map")}
            >
              CONTACT
            </button>
          </li>
          <li>
          <StyledWrapper>
      <button className="styled-button">
      <a
              className="nav-link scrollto"
              href="https://forms.gle/uu8Teaq37hSfGyLf7"
              
            >
              Register Now
            </a>
        
      </button>
    </StyledWrapper>
          </li>
        </ul>

        {/* Mobile Navigation Menu */}
        <img
          src={MenuIcon}
          className="mobile-nav-toggle"
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </nav>

      {/* Mobile Menu - Dropdown */}
      <nav className={`navbar-mobile ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              className="nav-link scrollto"
              href="https://forms.gle/uu8Teaq37hSfGyLf7"
              
            >
              Register Now
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#about"
              onClick={() => handleNavigation("/", "about")}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              onClick={() => handleNavigation("/schedule")}
            >
              SCHEDULE
            </a>
          </li>
          <li>
            <a
              className="nav-item nav-link"
              onClick={() => handleNavigation("/team")}
            >
              TEAM
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#events"
              onClick={() => handleNavigation("/events")}
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#gallery"
              onClick={() => handleNavigation("/", "gallery")}
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#sponsors"
              onClick={() => handleNavigation("/", "sponsors")}
            >
              SPONSORS
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#faqs"
              onClick={() => handleNavigation("/", "faqs")}
            >
              FAQ's
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#map"
              onClick={() => handleNavigation("/", "contact")}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;