import React from "react";
import Countdown from "react-countdown";
import "./Clock.css";

function Clock() {
  // Custom renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="live-now-container">
          <span className="live-now-text">LIVE NOW</span>
        </div>
      );
    }

    return (
      <>
        <div className="countdown-timer">
          {days}:{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
        <div className="time-labels">
          <span className="label-day">DAY</span>
          <span className="label-hours">HOURS</span>
          <span className="label-minutes">MINUTES</span>
          <span className="label-seconds">SECONDS</span>
        </div>
      </>
    );
  };

  return (
    <div className="clock-container">
      <div className="countdown-box">
        <Countdown
          date={new Date("2025-02-21T00:00:00")}
          renderer={renderer}
        />

        <div className="dates-mobile">
          <span className="date-numbers">
            21<b>TH</b> 22<b>TH</b> 23<b>TH</b>
          </span>
          <div className="date-year">
            2025 <span>February</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
