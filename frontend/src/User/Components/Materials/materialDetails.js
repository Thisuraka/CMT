import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

const MaterialDetails = (props) => {
  const [material, setMaterial] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/material/${props.match.params.id}`)
      .then((response) => {
        setMaterial(response.data.materials);
        setName(response.data.materials.name);
        setDescription(response.data.materials.description);
        setDocument(response.data.materials.document[0].url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container emp-profile">
      <div className="details_card">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="profile-img">
              <img src="https://blog.bizzabo.com/hs-fs/hubfs/Workshop%20Event%20Ideas/workshop-event-ideas-people-at-tables-min.png?width=600&name=workshop-event-ideas-people-at-tables-min.png" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-sm-6">
            <div className="profile-head">
              <h6>
                Material Details
              </h6>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
              </ul>
            </div>
            <div className="col-md-6">
              <label>Material Name : {name} </label>
            </div>
            <div className="col-md-6">
              <label>Description : {description} </label>
            </div>
            <br></br>
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <a className="btn profile-edit-btn" href={document} download><i className="fas fa-download" />Download</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetails;