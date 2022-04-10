import React from "react";
import StyledHR from "./../HorixontalRuler/StyledHR";
import "./Service.css";

function Service({ name, description }) {
  return (
    <div className="service">
      <StyledHR />
      <br />

      <h1>{name}</h1>

      <p>{description}</p>
    </div>
  );
}

export default Service;
