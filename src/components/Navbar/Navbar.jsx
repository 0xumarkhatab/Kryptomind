import React from "react";
import "./Navbar.css";
import QuoteButton from "./QuoteButton";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://kryptomind.com/wp-content/uploads/2022/03/cropped-Main-Logo-1.png"
          alt="kryptomind logo"
        />
      </div>
      <div className="navItems">
        <a href="https://kryptomind.com/services/">Services</a>
        <a href="https://kryptomind.com/about-us/">About Us</a>
        <a href="https://kryptomind.com/case-studies/">Case Studies</a>
        <a href="https://kryptomind.com/careers/">Careers </a>
        <a href="https://kryptomind.com/blogs/">Blogs</a>
        <a href="https://kryptomind.com/contact-us/">Contact Us</a>
      </div>
      <div>
        <QuoteButton />
      </div>
    </div>
  );
}

export default Navbar;
