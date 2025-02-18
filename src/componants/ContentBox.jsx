import React from 'react';
import Clock from './Clock';
import pragyan from '../assets/pragyan.png';
import './Contentbox.css';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  .styled-button {
    position: relative;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
    display: inline-flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #292929;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05) translateY(-0.2rem);
      box-shadow: inset -2px -2px rgba(255,255,255, 0.1);
    }
  }

  .styled-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
  }
`;


const ContentBox = () => {
  return (
    <div className="content-box">
      <div className="content-center">
        <h1>
          <img src="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229297/your-cloudinary-folder-name/gnolvtmx4oebmfved7ac.png" alt="Pragyan Logo" />
        </h1>
        <p className="tagline">"BRIGHTER THAN EVER BEFORE"</p>
        <br></br>
        <div className="date-details">
          <span className="date-numbers">
            21<b>st</b> 22<b>nd</b> 23<b>rd</b>
          </span>
          <span className="date-year">
            2025 February
          </span>
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
        </div>
        <Clock />
      </div>
    </div>
  );
};

export default ContentBox;
