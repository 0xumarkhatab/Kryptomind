import React from "react";

import "./Testimonial.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Testimonial({ message, name }) {
  return (
    <div className="testimonial">
      <FormatQuoteIcon />
      <p>{message}</p>
      <h3>{name}</h3>
      <h1>__</h1>
    </div>
  );
}

export default Testimonial;
