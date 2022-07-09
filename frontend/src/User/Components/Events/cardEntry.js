import React from "react";
import "./card.css";
import { Card, CardBody } from "react-simple-card";

const CardEntry = ({ data },props) => {
  const id = data[0].id;
  const eventName = data[0].eventName;
  const description = data[0].description;
  const event_id = data[0].event_id;
  const rowLen = data[0].mainImg.length;
  let mainImg = "";
  data[0].mainImg.map((img, i) => {
    if (rowLen === i + 1) {
      mainImg = img.url;
    } else {
      return 0;
    }
  });
  console.log();
  const viewEvent = `/event_details/${event_id}`;

  const venue = data[0].venue;

  return (
    <div className="card-container" key={id}>
      <div className="image-container">
        <img src={mainImg} />
      </div>
      <Card>
        <CardBody>
          {console.log(data[0])}
          <p>{eventName}</p>
          <p>{description}</p>
          <p>{venue}</p>
          <p>
            <a href={viewEvent}>View More</a>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEntry;
