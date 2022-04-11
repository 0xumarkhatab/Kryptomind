import React from "react";

import "./Testimonial.css";

function Testimonial({ message, name }) {
  return (
    <div className="testimonial">
      <img src="./icons/quote.png" />
      <p>{message}</p>
      <h3>{name}</h3>
      <h1>__</h1>
    </div>
  );
}

export default Testimonial;
