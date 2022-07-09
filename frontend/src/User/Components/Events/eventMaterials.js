import React from 'react'
import './card.css'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const eventMaterials = (props) => {
  return (
    <body className="masthead text-white text-center">
      <div className="container emp-profile">
        <div className="col-md-12">
          <div className="profile-head">
            <h6>
              Event Materials
            </h6>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card-container">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
            </div>
            <Card>
              <CardBody>
                <p>Paper Name:</p>
                <p>Description:</p>
                <p>Author:</p>
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
            </div>
            <Card>
              <CardBody>
                <p>Paper Name:</p>
                <p>Description:</p>
                <p>Author:</p>
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
          <div className="card-container">
            <div className="image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEZkRlu5xIvlEA6q7q04xGyDxe__XZSD8cQ&usqp=CAU" />
            </div>
            <Card>
              <CardBody>
                <p>Paper Name:</p>
                <p>Description:</p>
                <p>Author:</p>
                <a href="/paper_details">View More</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </body>

  );
}

export default eventMaterials;