import React from "react";
import AboutEntry from "./AboutEntry";
const About = (props) => {
  const datas = props.about;
  return (
    <div
      class="tab-pane fade show active"
      id="about"
      role="tabpanel"
      aria-labelledby="about"
    >
      {datas.map((data) => (
        <AboutEntry data={data} />
      ))}
    </div>
  );
};

export default About;
