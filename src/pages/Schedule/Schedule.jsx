import React from "react";
import { timeline_data } from "./data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Schedule.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Badge } from "lucide-react";

export default function Schedule() {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const workIconStyles = {
    background: "#ece7e1",
  };

  const schoolIconStyles = {
    background: "#ece7e1",
  };

  return (
    <div className="exp-wrapper" id="exp">
      <div className="exp-title">
        <h1
          className="title"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          Event Schedule
        </h1>
      </div>
      <div className="exp-subtitle">
        <h6
          className="subtitle"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          {new Date().toLocaleDateString()}
        </h6>
      </div>
      <div className="timeline-wrapper">
        <VerticalTimeline>
          {timeline_data.map((elem) => {
            const isWorkIcon = elem.icon === "work";
            const showButton =
              elem.buttonText !== undefined &&
              elem.buttonText !== null &&
              elem.buttonText !== "";

            return (
              <VerticalTimelineElement
                className="sub_element"
                key={elem.id}
                date={elem.date}
                dateClassName="date"
                icon={<Badge />}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ fontFamily: "BatmanForever" }}
                >
                  {elem.role}
                </h3>
                <h5
                  className="vertical-timeline-element-subtitle"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {elem.title}
                </h5>
                <p id="description">{elem.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
