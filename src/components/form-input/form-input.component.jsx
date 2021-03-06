import React from "react";

import "./form-input.style.css";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
        placeholder={otherProps.name}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
