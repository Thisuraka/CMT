import React from "react";
import CardEntry from "./cardEntry";

const EventCard = (props) => {
  const datas = props.data;
  return (
    <div className="row">
      {datas.map((data) => (
        <CardEntry data={data} />
      ))}
    </div>
  );
};

export default EventCard;
