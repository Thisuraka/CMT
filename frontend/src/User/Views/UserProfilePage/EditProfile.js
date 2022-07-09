import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ptype, setPtype] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const [role, setRole] = useState("Participants");
  const [isPaid, setisPaid] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState(false);
  const [init, setinit] = useState(true);
  const [error, setError] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${props.match.params.id}`)
      .then((response) => {
        console.log("===================");
        console.log(response.data);

        setUser(response.data.user);

        setName(response.data.user.name);
        setMobile(response.data.user.mobile);
        setUsername(response.data.user.username);
        setRole(response.data.user.role);
        setEmail(response.data.user.email);
        setPtype(response.data.user.participants.participant);
        setDesignation(response.data.user.participants.designation);
        setAffiliation(response.data.user.participants.affiliation);
        setisPaid(response.data.user.isPaid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const checkNull = (value) => {
    if (value == null) {
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
      validateEmail(email) &&
      checkNull(name) &&
      checkNull(mobile) &&
      checkNull(username) &&
      checkNull(email) &&
      checkNull(password) &&
      checkNull(ptype) &&
      checkNull(designation) &&
      checkNull(affiliation)
    ) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setinit(false);
    onValidate();
    if (formValid) {
      let user = {
        name,
        mobile,
        role,
        email,
        participant: ptype,
        designation,
        affiliation,
        isPaid,
        username,
        password,
      };
      axios
        .put(`http://localhost:3000/users/${props.match.params.id}`, user)
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
            // console.log('Error', error.message);
          }
          // console.log(error.config);
        });
    } else {
      setError("Invalid");
    }

    // window.location = `/userprofile`;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Edit User</h5>
        <hr />
        {formError && <Error message={formError} />}
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                disabled
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                disabled
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                name="designation"
                id="designation"
                value={designation}
                onChange={(event) => setDesignation(event.target.value)}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="affiliation" className="form-label">
                Affiliation
              </label>
              <input
                type="text"
                className="form-control"
                name="affiliation"
                id="affiliation"
                value={affiliation}
                onChange={(event) => setAffiliation(event.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default EditProfile;
