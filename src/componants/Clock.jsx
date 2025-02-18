import React from "react";
import Countdown from "react-countdown";
import "./Clock.css";

function Clock() {
  return (
    <div className="clock-container">
      {/* Countdown Timer */}
      <div className="countdown-box">
        <Countdown
          date={new Date("2025-02-22T00:00:00")}
          className="countdown-timer"
        />

        <div className="time-labels">
          <span className="label-day">DAY</span>
          <span className="label-hours">HOURS</span>
          <span className="label-minutes">MINUTES</span>
          <span className="label-seconds">SECONDS</span>
        </div>

        {/* Mobile: Dates below the clock */}
        <div className="dates-mobile">
          <span className="date-numbers">
            21<b>TH</b> 22<b>TH</b> 23<b>TH</b>
          </span>
          <div className="date-year">
            2025 <span>February</span>
          </div>
        </div>
      </div>

      {/* Large Screens: Dates on the side */}
      
    </div>
  );
}

export default Clock;
