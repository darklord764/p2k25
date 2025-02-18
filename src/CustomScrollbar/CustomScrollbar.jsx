import React from 'react';
import './CustomScrollbar.css';

const CustomScrollbar = ({ children }) => {
  return (
    <div className="custom-vertical-scrollbar">
      {children}
    </div>
  );
};

export default CustomScrollbar;