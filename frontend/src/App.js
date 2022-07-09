import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./User/Views/LandingPage/LangingPage";
import NavBar from "./User/Components/NavBar/Navbar";
import Footer from "./User/Components/Footer/Footer";
import "./App.css";
import Payment from "./User/Views/Payment/Payment";
import Dashboard from "./Admin/Views/Dashboard/Dashboard";
import AdminRoute from "./Utils/AdminRoute";
import EditorRoute from "./Utils/EditorRoute";
import ReviewerRoute from "./Utils/ReviewerRoute";
import MainAdmin from "./Admin/Components/Layout/MainAdmin";
import Main from "./User/Components/Layout/Main";
import UserIndex from "./Admin/Views/User";
import AddUser from "./Admin/Views/User/Add";
import EditUser from "./Admin/Views/User/Edit";
import AddEvent from "./Admin/Views/Event/Add";
import EditEvent from "./Admin/Views/Event/Edit";
import EventIndex from "./Admin/Views/Event";
import EditMaterial from "./Admin/Views/Material/Edit";
import AddMaterial from "./Admin/Views/Material/Add";
import MaterialIndex from "./Admin/Views/Material";
import Login from "./User/Views/LoginPage/Login";

import Events from "./User/Components/Events/events";

import EventDetails from "./User/Components/Events/eventDetails";

import eventMaterials from "./User/Components/Events/eventMaterials";

import Register from "./User/Views/RegisterPage/Register";
import UserProfile from "./User/Views/UserProfilePage/UserProfile";
import EditProfile from "./User/Views/UserProfilePage/EditProfile";
import ViewEvent from "./Admin/Views/Event/View";
import ViewMaterial from "./Admin/Views/Material/View";
import WorkshopMgt from "./User/Views/WorkshopMgtPage/WorkshopMgt";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";

import {
  getRole,
  getToken,
  getUser,
  removeUserSession,
  setUserSession,
} from "./Utils/Common";
import axios from "axios";
import MaterialDetails from "./User/Components/Materials/materialDetails";
import Materials from "./User/Components/Materials/materials";
const App = (props) => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    // console.log(token);
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:3000/users/verify?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.username, response.data.role,  response.data.id);
        setAuthLoading(false);
      })
      .catch((error) => {
        console.log(error);
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin/:path?">
            <MainAdmin>
              <Switch>
                <AdminRoute
                  path="/admin/event/add"
                  exact
                  component={AddEvent}
                />
                <AdminRoute
                  path="/admin/event/:id/edit"
                  exact
                  component={EditEvent}
                />
                <AdminRoute
                  path="/admin/event/:id"
                  exact
                  component={ViewEvent}
                />
                <AdminRoute path="/admin/event" exact component={EventIndex} />
                <AdminRoute
                  path="/admin/material/add"
                  exact
                  component={AddMaterial}
                />
                <AdminRoute
                  path="/admin/material/:id/edit"
                  exact
                  component={EditMaterial}
                />
                <AdminRoute
                  path="/admin/material/:id"
                  exact
                  component={ViewMaterial}
                />
                <AdminRoute
                  path="/admin/material"
                  exact
                  component={MaterialIndex}
                />
                <AdminRoute path="/admin/user/add" exact component={AddUser} />
                <AdminRoute
                  path="/admin/user/:id/edit"
                  exact
                  component={EditUser}
                />
                <AdminRoute path="/admin/user" exact component={UserIndex} />
                <AdminRoute path="/admin" exact component={Dashboard} />
                <AdminRoute path="*" component={Dashboard} />
              </Switch>
            </MainAdmin>
          </Route>
          <Route path="/editor/:path?">
            <MainAdmin>
              <Switch>
                <EditorRoute
                  path="/editor/event/add"
                  exact
                  component={AddEvent}
                />
                <EditorRoute
                  path="/editor/event/:id/edit"
                  exact
                  component={EditEvent}
                />
                <EditorRoute
                  path="/editor/event/:id"
                  exact
                  component={ViewEvent}
                />
                <EditorRoute
                  path="/editor/event"
                  exact
                  component={EventIndex}
                />
                <EditorRoute path="/editor" exact component={Dashboard} />
                <EditorRoute path="*" component={Dashboard} />
              </Switch>
            </MainAdmin>
          </Route>
          <Route path="/reviewer/:path?">
            <MainAdmin>
              <Switch>
                <ReviewerRoute
                  path="/reviewer/material/add"
                  exact
                  component={AddMaterial}
                />
                <ReviewerRoute
                  path="/reviewer/material/:id/edit"
                  exact
                  component={EditMaterial}
                />
                <ReviewerRoute
                  path="/reviewer/material/:id"
                  exact
                  component={ViewMaterial}
                />
                <ReviewerRoute
                  path="/reviewer/material"
                  exact
                  component={MaterialIndex}
                />
                <ReviewerRoute path="*" component={Dashboard} />
              </Switch>
            </MainAdmin>
          </Route>
          <Route>
            <Main>
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <PrivateRoute path="/payment" component={Payment} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/register" component={Register} />
                <PrivateRoute path="/userprofile" component={UserProfile} />
                <Route path="/editprofile/:id" exact component={EditProfile} />

                <PrivateRoute path="/workshopMgt" component={WorkshopMgt} />
                <Route path="/events" component={Events} />
                <Route path="/materials" component={Materials} />
                <Route path="/event_details/:id" component={EventDetails} />
                <Route path="/event_materials" component={eventMaterials} />
                <PrivateRoute path="/material_details/:id" component={MaterialDetails} />
              </Switch>
            </Main>
          </Route>
          {/* <Route path="/admin/dashboard" component={Dashboard} /> */}
          {/* <AdminRoute path="/admin/dashboard" component={Dashboard}></AdminRoute> */}
          {/* <AdminRoute path="/user/:id/edit" component={Dashboard}></AdminRoute> */}
          {/* <Route path="/" component={LandingPage}  exact/>    */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
