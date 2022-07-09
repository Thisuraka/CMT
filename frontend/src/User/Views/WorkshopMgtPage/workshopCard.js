import React from "react";

const WorkshopCard = (props) => {
  const name = props.data.name;
  const description = props.data.description;

  return (
    <div
      className="row"
      style={{
        alignContent: "center",
        justifyContent: "center",
        width: "10rem",
        margin: "5px",
      }}
    >
      <div className="col-md-2">
        <div>
          <div
            className="card border-dark  mb-3"
            style={{
              minWidth: "25rem",
              padding: "2px",
              maxHeight: "10rem",
              minHeight: "10rem",
            }}
          >
            <p className="card-header" style={{ textAlign: "center" }}>
              {name}
            </p>
            <p style={{ padding: "3px", fontSize: "14px", overflow: "hidden" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
