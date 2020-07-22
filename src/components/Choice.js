import React from "react";

const Choice = ({ state, choice }) => {
  return (
    <div>
      <button
        className="on-button"
        style={{
          color: state ? "white" : "#5C48D3",
          backgroundColor: state ? "#5C48D3" : "white",
        }}
        onClick={() => {
          choice(true);
        }}
      >
        <div>{"ON"}</div>
      </button>
      <button
        className="off-button"
        style={{
          color: state ? "#5C48D3" : "white",
          backgroundColor: state ? "white" : "#5C48D3",
        }}
        onClick={() => {
          choice(false);
        }}
      >
        <div>{"OFF"}</div>
      </button>
    </div>
  );
};

export default Choice;
