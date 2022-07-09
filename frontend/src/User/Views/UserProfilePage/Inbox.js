import React from "react";

const Inbox = (props) => {
  return (
    <div
      className="tab-pane fade show active"
      id="inbox"
      role="tabpanel"
      aria-labelledby="inbox"
    >
      <div className="row">
        <div className="col-md-6">
          <label>Experience</label>
        </div>
        <div className="col-md-6">
          <p>Expert</p>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
