import React from "react";

const Button = ({ incrClick }) => {
  return (
    <div>
      <button onClick={incrClick}>Click me!</button>
    </div>
  );
};

export default Button;
