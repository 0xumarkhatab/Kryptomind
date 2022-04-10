import React from "react";
import "./Proposal.css";

function Proposal({ stateChanger }) {
  console.log("state is ", stateChanger);
  setTimeout(() => {
    document
      .getElementById("proposal__close__button")
      .addEventListener("click", disAppearModal, false);
    document
      .getElementById("proposal__send__button")
      .addEventListener("click", disAppearModal, false);
  }, 2000);
  function disAppearModal() {
    stateChanger(false);
  }
  return (
    <div id="proposal" className="proposal">
      <div className="proposal__close__button" id="proposal__close__button">
        <button>Close</button>
      </div>
      <div className="proposal__content">
        <div className="proposal__left">
          <h1>Request For Proposal</h1>
        </div>
        <div className="proposal__right">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea cols={"30"} rows={"5"} placeholder="Message"></textarea>
          <br />
          <button id="proposal__send__button">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
