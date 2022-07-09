import React from "react";

const Step = (props) => {
  return (
    <div className="step">
      {props.dis ? (
        <button className="step-trigger" disabled>
          <span className="bs-stepper-circle" />
          <span className="bs-stepper-label">{props.title}</span>
        </button>
      ) : (
        <button className="step-trigger">
          <span className="bs-stepper-circle" />
          <span className="bs-stepper-label">{props.title}</span>
        </button>
      )}
    </div>
  );
};

export default Step;
