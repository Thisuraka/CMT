import React from "react";
import {} from "react-router-dom";

function MouseOver(event) {
  event.target.style.color = "#FFFFFF";
  event.target.style.background = "#0DA868";
}
function MouseOut(event) {
  event.target.style.color = "#0DA868";
  event.target.style.background = "#FFFFFF";
}

const SuccessButton = ({ text, onClick, position, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseOut={MouseOut}
      onMouseOver={MouseOver}
      style={{
        // borderColor: "#0DA868",
        borderWidth: "0px",
        borderRadius: "5px",
        minHeight: "30px",
        minWidth: "120px",
        height: "fit-content",
        width: "fit-content",
        padding: "3px",
        margin: "4px",
        fontSize: "12px",
        color: "#0DA868",
        fontWeight: "bold",
        position: { position },
      }}
    >
      {text}
    </button>
  );
};

export default SuccessButton;
