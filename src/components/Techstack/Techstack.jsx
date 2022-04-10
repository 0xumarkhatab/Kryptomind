import React from "react";
import StyledHR from "./../HorixontalRuler/StyledHR";
import "./Techstack.css";

function Techstack() {
  return (
    <div className="techstack">
      <div className="techstack__left">
        <StyledHR />
        <h3>Tech Stack</h3>
        <p>What We Have Mastered</p>
      </div>
      <div className="techstack__right">
        <p>
          With around <b>SIX+</b> years of experience and over <b>200+</b>{" "}
          blockchain-related projects under our name, we are confident in the
          skills that we have honed. Our ever-growing tech stack includes, but
          is not limited to.{" "}
        </p>
      </div>
    </div>
  );
}

export default Techstack;
