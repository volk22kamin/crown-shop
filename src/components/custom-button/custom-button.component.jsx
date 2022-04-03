import React from "react";

import "./custom-button.style.css";

const CustomButton = ({ children, ...otherProps }) => {
  console.log("chil", children);
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
