import React, { useState } from "react";
import "../../../App.css";
import SuccessButton from "../../Components/Button/SuccessButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Step from "../../Components/Stepper/step";
import axios from "axios";

const Register = () => {
  const [step, setStep] = useState(0);

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

  let submit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  let reset = (e) => {
    e.preventDefault();
    setStep(0);
  };

  const navWorkshopMgt = () => {
    window.location = `/workshopMgt`;
  };

  const navAddPaper = () => {
    // window.location = `/workshopMgt`;
  };

  const checkNull = (value) => {
    if (value.trim() == null || value.trim() == "") {
      return false;
    } else {
      return true;
    }
  };

  const checkString = (value) => {
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

  const done = (e) => {
    e.preventDefault();
    setinit(false);
    console.log(formValid);
    if (onValidate) {
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
        .post("http://localhost:3000/users/register", user)
        .then((response) => {
          // console.log(response);
          alert("Successfully Inserted");
        })
        .catch((error) => {
          if (error.response) {
            setFormError(error.response.data.message);
            setUserSession(response.data.token, response.data.user);
          } else if (error.request) {
            // console.log(error.request);
          } else {
            // console.log("Error", error.message);
          }
        });
    } else {
      // console.log(formValid);
      setError("Invalid");
    }

    if (ptype == "WorkshopConductor") {
      navWorkshopMgt();
    } else if (ptype == "Researcher") {
      navAddPaper();
    } else {
      null; //change here
    }
  };

  const AccountData = (
    <div className="customCardOne" style={{ marginLeft: "70px" }}>
      <div className="card-header">
        <center>
          <h3> Register </h3>
        </center>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <select
          className="form-dropdown"
          aria-label="Default select example"
          id="pType"
          onChange={(event) => setPtype(event.target.value)}
          required
        >
          <option defaultValue>Choose account type</option>
          <option value="Researcher">Researcher</option>
          <option value="WorkshopConductor">Workshop Conductor</option>
          <option value="Participant">Participant</option>
        </select>
        <div className="form-group">
          <SuccessButton
            text="Next"
            type="submit"
            onClick={submit}
            position="center"
          />
        </div>
      </form>
      <div className="card-footer"></div>
    </div>
  );
  const UserData = (
    <div className="customCardOne" style={{ marginLeft: "70px" }}>
      <div className="card-header">
        <center>
          <h3> Register </h3>
        </center>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="mobile"
              id="text"
              className="form-control"
              placeholder="Mobile"
              onChange={(event) => setMobile(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="designation"
              className="form-control"
              placeholder="Designation"
              onChange={(event) => setDesignation(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="affiliation"
              className="form-control"
              placeholder="Affiliation"
              onChange={(event) => setAffiliation(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <SuccessButton
              text="Next"
              type="button"
              onClick={submit}
              position="center"
            />
          </div>
        </form>
        <div className="card-footer"></div>
      </div>
    </div>
  );

  const ConfirmData = (
    <div style={{ width: "100%", display: "table" }}>
      <div style={{ display: "table-row" }}>
        <form onSubmit={done} method="POST">
          <div style={{ width: "600px", display: "table-cell" }}>
            <div className="customCardOne" style={{ marginLeft: "70px" }}>
              <div className="card-header">
                <center>
                  <h3> Register </h3>
                </center>
              </div>
              <div className="card-body"></div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    id="confrimUsername"
                    value={username}
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="confirmEmail"
                    value={email}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="accountType"
                    value={ptype}
                    className="form-control"
                    placeholder="Account Type"
                  />
                </div>
              </form>
              <div className="card-footer"></div>
            </div>
          </div>
          <div style={{ display: "table-cell" }}>
            <div className="customCardOne" style={{ marginLeft: "70px" }}>
              <div className="card-header">
                <center>
                  <h3> Register </h3>
                </center>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      id="confrimName"
                      value={name}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="confirmMobile"
                      value={mobile}
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="confrimDesignation"
                      value={designation}
                      className="form-control"
                      placeholder="Designation"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="confirmAffiliation"
                      value={affiliation}
                      className="form-control"
                      placeholder="Affiliation"
                    />
                  </div>
                </form>
                <div className="card-footer"></div>
              </div>
            </div>

            <div className="form-group" style={{ paddingLeft: "75px" }}>
              <SuccessButton
                text="Reset"
                type="button"
                onClick={reset}
                position="center"
              />
              {/* <button text="Submit" type="submit" position="center" /> */}
              <SuccessButton text="Submit" type="submit" position="center" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  return (
    <div className="rootBody">
      <div>
        <div id="stepper1" className="bs-stepper" style={{ maxWidth: "250px" }}>
          <div className="bs-stepper-header">
            {step == 0 ? (
              <Step title="Account Data" dis="false" />
            ) : (
              <Step title="Account Data" dis="true" />
            )}
            <div className="line"></div>
            {step == 1 ? (
              <Step title="User Data" dis="false" />
            ) : (
              <Step title="User Data" dis="true" />
            )}
            <div className="line"></div>
            {step == 2 ? (
              <Step title="Confirmation" dis="false" />
            ) : (
              <Step title="Confirmation" dis="true" />
            )}
          </div>
        </div>
        {step === 0
          ? AccountData
          : step === 1
          ? UserData
          : step === 2
          ? ConfirmData
          : null}
      </div>
    </div>
  );
};

export default Register;
