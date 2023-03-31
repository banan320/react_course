import React from "react";

const Button = ({ text, incrClick }) => {
  return (
    <>
      <button onClick={incrClick}>{text}</button>
    </>
  );
};

export default Button;
