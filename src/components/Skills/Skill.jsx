import React from "react";
import "./Skill.css";

function Skill({ image, name, description }) {
  return (
    <div className="skill">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Skill;
