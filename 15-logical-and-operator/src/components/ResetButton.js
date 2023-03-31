import React from "react";

const buttonStyle = { backgroundColor: "lightgreen", fontSize: "20px" };

const ResetButton = ({ count, resetCount }) => {
  return (
    <>
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </>
  );
};

export default ResetButton;
