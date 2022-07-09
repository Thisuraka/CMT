import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import { Card, CardBody } from "react-simple-card";
import EventCard from "./eventCard";

const EventDetails = (props) => {
    const [event, setEvent] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [venue, setVenue] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:3000/event/${props.match.params.id}`)
            .then((response) => {
                setEvent(response.data.events);
                setName(response.data.events.eventName);
                setDescription(response.data.events.description);
                // setImage(response.data.events.mainImg);
                setVenue(response.data.events.venue);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // const data = event.map((sevent, i) => [
    //     {
    //         id: "0",
    //         eventName: sevent.eventName,
    //         id: "1",
    //         description: sevent.description,
    //         id: "2",
    //         mainImg: sevent.mainImg,
    //         id: "3",
    //         venue: sevent.venue,
    //     },
    // ]);

    return (
        <div className="container emp-profile">
            <div className="details_card">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-sm-6">
                        <div className="profile-img">
                            <img src="https://hire4event.com/blogs/wp-content/uploads/2019/03/best-Event-company-in-Greater-Noida-.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-6">
                        <div className="profile-head">
                            <h6>
                                Event Details
                            </h6>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <label>Event Name : {name} </label>
                        </div>
                        <div className="col-md-6">
                            <label>Description : {description} </label>
                        </div>
                        <div className="col-md-6">
                            <label>Venue : {venue} </label>
                        </div>
                        <br></br>
                        <div className="col-md-6">
                            <a href="/materials">View Materials</a>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EventDetails;