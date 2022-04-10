import React from "react";
import QuoteButton from "../Navbar/QuoteButton";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction__left">
        <h3>We Are the Leaders of Blockchain Ecosystem</h3>
        <br />
        <p>
          DeFi | Metaverse | Virtual Reality | Blockchain | DAPP | NFT | Smart
          Contract
        </p>
        <br />
        <br />
        <QuoteButton isPrimary="true" />
      </div>
      <div className="introduction__right">
        <div className="top__left">
          <img src="./intro_k1.png" />
        </div>
        <div className="main">
          <img src="./intro_k2.png" />
        </div>
        <div className="top__right">
          <img src="./intro_k3.png" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
