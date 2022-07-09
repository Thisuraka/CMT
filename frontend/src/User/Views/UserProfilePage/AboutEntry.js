import React from "react";

const AboutEntry = (props) => {
  const title = props.data.title;
  const id = props.data.id;
  const info = props.data.info;
  return (
    <div className="row" key={id}>
      <div className="col-md-3">
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </div>
      <div className="col-md-6">
        <p style={{ color: "#878787" }}>{info}</p>
      </div>
    </div>
  );
};

export default AboutEntry;
