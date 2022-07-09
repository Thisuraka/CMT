import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import axios from "axios";
import { getRole, setUserSession } from "../../../Utils/Common";
const check = () => {
  console.log("hi");
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [formError, setFormError] = useState("");
  const [init, setinit] = useState(true);

  const checkNull = (value) => {
    if (value.trim() == null || value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };

  const onValidate = () => {
    if (checkNull(username) && checkNull(password)) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setinit(false);
    if (onValidate) {
      let user = {
        username,
        password,
      };
      axios
        .post("http://localhost:3000/users/login", user)
        .then((response) => {
          console.log(response.data);
          alert("Successfully logged");
          setLoading(false);
          setUserSession(response.data.token, response.data.username , response.data.role , response.data.id);
          // localStorage.setItem('token',response.data.token);
          // localStorage.setItem('user',response.data.user);
          // localStorage.setItem('user_id',response.data.user._id);
          // localStorage.setItem('user_id',response.data.user.role);

          if (response.data.role == "Participants") {
            window.location = `/`;
          } else if (getRole() == "Admin") {
            window.location = `/admin`;
          } else if (getRole() == "Reviewer") {
            window.location = `/reviewer`;
          } else if (getRole() == "Editor") {
            window.location = `/editor`;
          } else {
            window.location = `/`;
          }
        })
        .catch((error) => {
          if (error.response) {
            // setFormError(error.response.data.message);
            setLoading(false);
            if (error.response.status === 401)
              setError(error.response.data.message);
            else setFormError("Something went wrong. Please try again later.");

            // console.log(error);
            // console.log(error.response);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          } else if (error.request) {
            // console.log(error.request);
          } else {
            // console.log("Error", error.message);
          }
        });
    } else {
      console.log(formValid);
      setError("Invalid");
    }
  };

  return (
    <div className="rootBody">
      <div className="customCardOne">
        <div className="card-header">
          <center>
            <h3>Sign In</h3>
          </center>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin} method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                style={{ border: "1", borderColor: "#1286C1" }}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                style={{ border: "1", borderColor: "#1286C1" }}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <SuccessButton text="Login" type="submit" position="center" />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="form-group">
            <a href="#" style={{ color: "#1286C1", fontSize: "14px" }}>
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
