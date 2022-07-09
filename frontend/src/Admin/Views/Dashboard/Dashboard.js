import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/BreadCrumb";
import axios from "axios";
const Dashboard = () => {
  var titles = [
    {
      name: "Admin",
      link: "/admin",
    },
    {
      name: "Dashboard",
      link: "/admin",
    },
  ];
  const [eventcount, seteventcount] = useState(0);
  const [usercount, setusercount] = useState(0);
  const [materialcount, setmaterialcount] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:3000/event/`).then((response) => {
      seteventcount(response.data.events.length);
    });
    axios.get(`http://localhost:3000/material/`).then((response) => {
        setmaterialcount(response.data.materials.length);
    });
    axios.get(`http://localhost:3000/users/`).then((response) => {
        setusercount(response.data.Users.length);
    });
  }, []);
  return (
    <>
      <Breadcrumb titles={titles} />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Event</h5>
          <hr />
          <div className="row">
            <div className="col-4">
              <div className="card bg-primary">
                <div className="card-title p-3">
                  <h3>Number of Users</h3>
                </div>
                <div className="card-body">
                  <h2>{usercount}</h2>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-danger">
                <div className="card-title p-3">
                  <h3>Number of Events</h3>
                </div>
                <div className="card-body">
                  <h2>{eventcount}</h2>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-warning">
                <div className="card-title p-3">
                  <h3>Number of Material</h3>
                </div>
                <div className="card-body">
                  <h2>{materialcount}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
