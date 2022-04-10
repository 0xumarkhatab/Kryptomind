import React from "react";
import Testimonial from "./Testimonial";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials__heading">
        <h1>We Build Everlasting Relationships</h1>
      </div>
      <div className="testimonials__messages">
        <Testimonial
          name={"Andre Owens"}
          message={
            "i have this distinct pleasure of working with Kryptomind on the R33e/Kryptonex project.They had the vision to see the benefits and the passion to turn that into a competitive advantage."
          }
        />
        <Testimonial
          name={"Sadaf H"}
          message={
            "Kryptomind has helped us set up our Blockchain infrastructure on AWS.The process they follow is very friendly and cooperative."
          }
        />
        <Testimonial
          name={"Mauricio Diaz"}
          message={
            "Team of extremely talented developers.Excellent communication skills with incredible performance"
          }
        />
      </div>
      <div className="orange__circle">
        <p></p>
      </div>
    </div>
  );
}

export default Testimonials;
