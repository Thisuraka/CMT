import React, { useRef, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/BreadCrumb";
import axios from "axios";
import { getToken } from "../../../Utils/Common";
import Loader from "../../Components/Loader/Loader";
import "core-js/stable";
import "regenerator-runtime/runtime"

const AddEvent = () => {
  var titles = [
    { name: "Admin", link: "/admin" },
    { name: "Event", link: "/event" },
    { name: "Add Event", link: "/add" },
  ];

  const [loading,setloading] = useState(false);
  const [init, setinit] = useState(true);

  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [mainImg, setMainImg] = useState(null);
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [isApproved, setIsApproved] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(true);
  const form = useRef(null);

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
    } else {
      setFormValid(false);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setinit(false);
    onValidate();
    // if(1){
    if (formValid) {
      // let event = {
      //   eventName,
      //   description,
      //   eventType,
      //   venue,
      //   image: mainImg,
      //   duration: {
      //     From,
      //     To,
      //   },
      //   status: isApproved,
      // };
      // var date = new Date(Date);
      // console.log(event);
      const data = new FormData(form.current);
      data.append("image", mainImg);
     await axios({
        method: "post",
        url: "http://localhost:3000/event",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: getToken(),
        },
      })
        // axios.post('http://localhost:3000/event',event)
        .then((response) => {
          // console.log(response);
          alert("Successfully Inserted");
          window.location = 'admin/event'
        })
        .catch((error) => {
          if (error.response) {
            setFormError(error.response.data.message);
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
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
          <h5 className="card-title">Add Event</h5>
          {loading && <Loader />} 
          <hr />
          <form ref={form} onSubmit={onSubmit} encType="multipart/form-data">
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
                  onChange={(event) => setEventName(event.target.value)}
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
                  onChange={(event) => setVenue(event.target.value)}
                />
              </div>
              <div className="mb-3 col-md-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  onChange={(event) => setDescription(event.target.value)}
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
                    onChange={(event) => setEventType(event.target.value)}
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
                    onChange={(event) => setEventType(event.target.value)}
                    value="Conference"
                  />
                  <label className="form-check-label" htmlFor="prole1">
                    Conference
                  </label>
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="image" className="form-label">
                  Main Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  id="image"
                  onChange={(event) => {
                    setMainImg(event.target.files[0]);
                  }}
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
                  onChange={(event) => setFrom(event.target.value)}
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
                  min={From}
                  onChange={(event) => setTo(event.target.value)}
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
                  onChange={(e) => setIsApproved(e.target.value)}
                >
                  <option defaultValue value="Pending">
                    Pending
                  </option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
