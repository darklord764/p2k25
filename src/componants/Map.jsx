import React from "react";

function Map() {
  return (
    <div className="md:m-9 xl:mx-8 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.797875986552!2d77.292231!3d19.112089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29f0b2e43199%3A0xe11b84ac3144b2b4!2sSGGS%2C%20Vishnupuri%2C%20Nanded%2C%20Maharashtra%20431606!5e0!3m2!1sen!2sin!4v1736306578673!5m2!1sen!2sin"
        width="650"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[24rem] rounded-md map"
      ></iframe>
    </div>
  );
}

export default Map;
