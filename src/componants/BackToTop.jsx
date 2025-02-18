import React, { useState, useEffect } from "react";
import "./BackToTopButton.css"; // Import the CSS file

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Show button when the user scrolls down
  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     console.log("ScrollY:", window.scrollY); // Debug log
  //     if (window.scrollY > 300) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };
  
  //   window.addEventListener("scroll", toggleVisibility);
  
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);
  

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop} 
          className="back-to-top-button" 
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
