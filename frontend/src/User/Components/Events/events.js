import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import { Card, CardBody } from "react-simple-card";
import EventCard from "./eventCard";

const Events = (props) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/event")
      .then((response) => {
        // console.log(response.data);
        setEvent(response.data.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = event.map((sevent, i) => [
    {
      id: "0",
      eventName: sevent.eventName,
      id: "1",
      description: sevent.description,
      id: "2",
      mainImg: sevent.mainImg,
      id: "3",
      venue: sevent.venue,
      id: "4",
      event_id: sevent._id,
    },
  ]);

  return (
    <body className="masthead text-white text-center">
      <div class="container emp-profile">
        <div class="col-md-12">
          <div class="profile-head">
            <h6>Events</h6>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="workshop-tab"
                  data-toggle="tab"
                  href="/events"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Workshops
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="conference-tab"
                  data-toggle="tab"
                  href="/events"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Conferences
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <EventCard data={data} />
        </div>
      </div>
    </body>
  );
};

export default Events;
