import React from "react";
import "./card.css";
import { Card, CardBody } from "react-simple-card";

const CardEntry = ({ data }) => {
  const id = data[0]._id;
  const name = data[0].name;
  const description = data[0].description;
  const event = (data[0].eventId) ? data[0].eventId.eventName : '';
  const material_id = data[0].material_id;
  const rowLen = data[0].images.length;
  let images = "";
  data[0].images.map((img, i) => {
    if (rowLen === i + 1) {
      images = img.url;
    } else {
      return 0;
    }
  });
  console.log();
  const viewMaterial = `/material_details/${material_id}`;

  return (
    <div className="card-container" key={id}>
      <div className="image-container">
        <img src={images} />
      </div>
      <Card>
        <CardBody>
          {console.log(data[0])}
          <p>{name}</p>
          <p>{description}</p>
          <p>{event}</p>
          <p>
            <a href={viewMaterial}>View More</a>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEntry;
