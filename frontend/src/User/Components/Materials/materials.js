import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import { Card, CardBody } from "react-simple-card";
import MaterialCard from "./materialCard";

const Materials = (props) => {
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/material")
      .then((response) => {
        // console.log(response.data);
        setMaterial(response.data.materials);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = material.map((smaterial, i) => [
    {
      id: "0",
      name: smaterial.name,
      id: "1",
      description: smaterial.description,
      id: "2",
      images: smaterial.images,
      id: "3",
      material_id: smaterial._id,
    },
  ]);

  return (
    <body className="masthead text-white text-center">
      <div class="container emp-profile">
        <div class="col-md-12">
          <div class="profile-head">
            <h6>Materials</h6>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="workshop-tab"
                  data-toggle="tab"
                  href="/materials"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Workshop
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="reasearch-tab"
                  data-toggle="tab"
                  href="/materials"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Research
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <MaterialCard data={data} />
        </div>
      </div>
    </body>
  );
};

export default Materials;
