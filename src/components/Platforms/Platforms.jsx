import React from "react";
import "./Platforms.css";
import StyledHR from "../HorixontalRuler/StyledHR";

function Platforms() {
  return (
    <div className="platforms">
      <div className="heading">
        <h1>Platforms We've Worked On</h1>
        <br />
        <StyledHR />
      </div>
      <div className="platforms__list">
        <p>EOS</p>
        <p>Hedera</p>
        <p>Tezos</p>
        <p>Ripple</p>
        <p>Steller</p>
        <p>Polygon</p>
        <p>Bitcoin</p>
        <p>Ethereum</p>
        <p>Solana</p>
        <p>HyperLedger</p>
      </div>
    </div>
  );
}

export default Platforms;
