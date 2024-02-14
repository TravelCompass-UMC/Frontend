import React from "react";
import "../../styles/component_styles/common_button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
