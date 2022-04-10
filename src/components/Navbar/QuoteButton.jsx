import React, { useState } from "react";
import "./QuoteButton.css";
import Proposal from "../Proposal/Proposal";
function QuoteButton({ isPrimary }) {
  const [proposalShow, setProposalShow] = useState(false);
  let classname = "quoteButton";
  if (isPrimary !== undefined) {
    classname += " ";
    classname += "quoteButton__primary";
  }
  return (
    <div>
      {proposalShow ? (
        <Proposal stateChanger={setProposalShow} />
      ) : (
        <div
          onClick={() => {
            setProposalShow(true);
          }}
          className={classname}
        >
          <button>
            <p>Get A Quote</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default QuoteButton;
