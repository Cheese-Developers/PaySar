import React from "react";

const Button = ({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary rounded-md text-secondary font-semibold uppercase text-sm px-5 py-1.5"
    >
      {text}
    </button>
  );
};

export default Button;
