import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css";
import About from "./About";
import Inbox from "./Inbox";
import { getUserId, getToken } from "../../../Utils/Common";

export const LinkDiv = ({ parttype }) => {
  if ((parttype = "WorkshopConductor")) {
    return (
      <div>
        <a href="/workshopMgt">Create workshop</a>
        <br />
        <a href="/events"> Events </a>
        <br />
        <a href="/papers"> Papers </a>
        <br />
      </div>
    );
  } else if ((parttype = "Researcher")) {
    return (
      <div>
        <a href="/userProfile">Add / Edit paper</a>
        <br />
        <a href="/events"> Events </a>
        <br />
        <a href="/papers"> Papers </a>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <a href="/events"> Events </a>
        <a href="/papers"> Papers </a>
      </div>
    );
  }
};

const UserProfile = (props) => {
  const [togBtn, setTogBtn] = useState("about");
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState(getUserId());
  const token = getToken();

  var editUrl = (obj) => {
    return `/editprofile/${obj}`;
  };

  useEffect(() => {
    // setUser_ID(getUserId());
    // console.log(user_id);
    axios
      .get(`http://localhost:3000/users/${userID}`)
      .then((response) => {
        // console.log(respose);
        // setUsers(response.data.Users);
        // console.log(users);
        console.log(response);
        setUsers(response.data.user);
        // console.log(users);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [userID]);

  const userDetails = [
    { id: "0", title: "Name", info: users.name },
    { id: "1", title: "Email", info: users.email },
    { id: "2", title: "Mobile", info: users.mobile },
    {
      id: "3",
      title: "Designation",
      info: users.participants ? users.participants.designation : "",
    },
    {
      id: "4",
      title: "Affiliation",
      info: users.participants ? users.participants.affiliation : "",
    },
  ];
  const parttype = users.participants ? users.participants.participant : null;
  return (
    <div>
      <div className="container profile">
        <form method="post">
          <div className="row" style={{ maxHeight: "150px" }}>
            {/* ======================== Profile photo sector ======================== */}
            <div className="col-md-4" style={{ paddingLeft: "60px" }}>
              <h3 style={{ color: "#1367D3", fontWeight: "bold" }}>
                {users.username}
              </h3>
            </div>
            {/* ======================== Profile summary sector ======================== */}
            <div className="col-md-6">
              <div className="profile-summary">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" style={{ marginRight: "10px" }}>
                    <a
                      className="nav-link active"
                      id="about"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => setTogBtn("about")}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="inbox"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => setTogBtn("inbox")}
                    >
                      Inbox
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ======================== Edit profile button ======================== */}
            <div className="col-md-2">
              <a
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                href={editUrl(users._id)}
              >
                Edit Profile
              </a>
            </div>
          </div>
          {/* ======================== Side Pannel ======================== */}
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Easy access</p>
                {parttype && <LinkDiv parttype={parttype} />}
              </div>
            </div>
            {/* ======================== Profile details ======================== */}
            <div
              className="col-md-7"
              style={{
                backgroundColor: "#FFFFFF",
                minHeight: "250px",
                padding: "20px",
              }}
            >
              <div className="tab-content inbox-tab" id="myTabContent">
                {togBtn == "about" && <About about={userDetails} />}
                {togBtn == "inbox" && <Inbox />}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
