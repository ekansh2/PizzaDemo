import React from "react";
import MultiplePizzas from "../../assets/multiplePizzas.jpeg";
import "../../styles/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Pizza Palace believes in doing the right thing, putting people first,
          creating inspired solutions, championing our customers, and growing
          and winning together. Pizza Palace came from humble beginnings in
          2022, with just one store. Now, as the largest pizza company in the
          world, Domino’s proudly continues its legacy of delivering
          great-tasting pizza to customers’ doors.
        </p>
      </div>
    </div>
  );
}

export default About;
