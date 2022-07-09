import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb/BreadCrumb";
import axios from "axios";
import Select from "react-select";
import moment from "moment";
import { getToken } from "../../../Utils/Common";
import Loader from "../../Components/Loader/Loader";
import "core-js/stable";
import "regenerator-runtime/runtime"

const ViewEvent = (props) => {
  var titles = [
    { name: "Admin", link: "/admin" },
    { name: "Event", link: "/event" },
    { name: "View", link: "/view" },
  ];

  const [init, setinit] = useState(true);
  const [loading,setloading] = useState(false);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [isApproved, setIsApproved] = useState("");
  const [reason, setReason] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(true);

  const [events, setEvents] = useState([]);

  useEffect(async() => {
    setloading(true);
    await axios
      .get(`http://localhost:3000/event/${props.match.params.id}`)
      .then((response) => {
        setEvents(response.data.events);
        setEventName(response.data.events.eventName);
        setDescription(response.data.events.description);
        setEventType(response.data.events.eventType);
        setVenue(response.data.events.venue);
        setMainImg(response.data.events.mainImg);
        setReason(response.data.events.message);
        setFrom(
          moment(response.data.events.duration.From).format("YYYY-MM-DDTkk:mm")
        );
        setTo(
          moment(response.data.events.duration.To).format("YYYY-MM-DDTkk:mm")
        );
        setIsApproved(response.data.events.status);
      });
      setloading(false);
  }, []);

  const checknull = (value) => {
    if (value.trim() == null || value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };
  const checkstring = (value) => {
    if (typeof value != "string") {
      return false;
    }
  };
  function validateEmail(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }
  const onValidate = () => {
    if (
      checknull(eventName) &&
      checknull(description) &&
      checknull(eventType) &&
      checknull(venue) &&
      checknull(From) &&
      checknull(To)
    ) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setinit(false);
    const token = getToken();
    if (onValidate) {
      let event = {
        status: isApproved,
        message: reason,
      };

      await axios({
        method: "post",
        url: `http://localhost:3000/event/${props.match.params.id}/approve`,
        data: event,
        headers: { authorization: token },
      })
        .then((response) => {
          console.log(response);
          alert("Successfully Inserted");
        })
        .catch((error) => {
          if (error.response) {
            setFormError(error.response.data.message);
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the
            // browser and an instance of
            // http.ClientRequest in node.js
            // console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            // console.log("Error", error.message);
          }
        });
    } else {
      setError("Invalid");
    }
    setloading(false);
  };

  return (
    <>
      <Breadcrumb titles={titles} />
      <hr />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">View Event</h5>
          <hr />
          {loading && <Loader />} 
          <form method="POST" onSubmit={onSubmit}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="eventName" className="form-label">
                  Event Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  id="eventName"
                  value={eventName}
                  readOnly
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="venue" className="form-label">
                  Venue
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="venue"
                  id="venue"
                  value={venue}
                  readOnly
                />
              </div>
              <div className="mb-3 col-md-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  readOnly
                  rows="4"
                  value={description}
                  name="description"
                ></textarea>
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="eventtyple" className="form-label">
                  Event Type
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="eventType"
                    id="eventType1"
                    checked={eventType == "Workshop"}
                    readOnly
                    value="Workshop"
                  />
                  <label className="form-check-label" htmlFor="prole1">
                    Workshop
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="eventType"
                    id="eventType2"
                    checked={eventType == "Conference"}
                    readOnly
                    value="Conference"
                  />
                  <label className="form-check-label" htmlFor="prole1">
                    Conference
                  </label>
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="mainImage" className="form-label">
                  Main Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="mainImage"
                  id="mainImage"
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-md-12 fs-4">Duration</div>
              <div className="mb-4 col-md-4">
                <label htmlFor="date" className="form-label">
                  From
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fromdate"
                  id="fromdate"
                  value={From}
                  readOnly
                />
              </div>
              <div className="mb-4 col-md-4">
                <label htmlFor="date" className="form-label">
                  To
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="todate"
                  id="todate"
                  value={To}
                  readOnly
                />
              </div>
              <div className="mb-4 col-md-4">
                <label htmlFor="isApproved" className="form-label">
                  is Approved
                </label>
                <select
                  type="text"
                  className="form-select"
                  name="isApproved"
                  id="isApproved"
                  value={isApproved}
                  onChange={(e) => {
                    // console.log(isApproved);
                    setIsApproved(e.target.value);
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option>
                </select>
              </div>
            </div>
            {isApproved == "Declined" && (
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label htmlFor="reason" className="form-label">
                    Reason Of Decline
                  </label>
                  <textarea
                    className="form-control"
                    id="reason"
                    onChange={(e) => setReason(e.target.value)}
                    rows="4"
                    value={reason}
                    name="reason"
                  ></textarea>
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewEvent;
