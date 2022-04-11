import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="services">
        <h1>Services</h1>
        <a href="https://kryptomind.com/services/#smartcontract">
          Smart Contracts
        </a>
        <a href="https://kryptomind.com/services/#webdevelopment">
          Web App Development
        </a>
        <a href="https://kryptomind.com/services/#mobileapp">
          Mobile App development
        </a>
        <a href="https://kryptomind.com/services/#consultancy">Consultancy</a>
        <a href="https://kryptomind.com/services/#ico">ICO's</a>
      </div>
      <div className="case__studies">
        <h1>Case Studies</h1>
        <a href="https://kryptomind.com/case-studies/#acx">ACX</a>
        <a href="https://kryptomind.com/case-studies/#fitscrypt">Fitscrypt</a>
        <a href="https://kryptomind.com/case-studies/#senoa">Senoa</a>
        <a href="https://kryptomind.com/case-studies/#gwallet">G-Wallet</a>
      </div>
      <div className="job__roles">
        <h1>Job Roles</h1>
        <a href="https://kryptomind.com/careers/#blockchain">Blockchain</a>
        <a href="https://kryptomind.com/careers/#development">Development</a>
        <a href="https://kryptomind.com/careers/#businessoperation">
          Business Operations
        </a>
        <a href="https://kryptomind.com/careers/#cheifofficer">Chief Officer</a>
      </div>
      <div className="company">
        <h1>Company</h1>
        <a href="https://kryptomind.com/services/">Services</a>
        <a href="https://kryptomind.com/about-us/">About Us</a>
        <a href="https://kryptomind.com/case-studies/">Case Studies</a>
        <a href="https://kryptomind.com/careers/">Careers</a>
        <a href="https://kryptomind.com/blogs/">Blogs</a>
        <a href="https://kryptomind.com/contact-us/">Contact Us</a>
      </div>
      <div className="contact__us">
        <a href="#">
          <img src="https://kryptomind.com/wp-content/uploads/2022/03/cropped-Main-Logo-1.png" />
        </a>
        <h1>Subscribe To Our Newsletter</h1>
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
        <br />
        <div className="social__media">
          <a href="https://www.facebook.com/kryptomindOfficial">
            {" "}
            <img src="./icons/facebook.png" />
          </a>
          <a href="https://twitter.com/Krypto_mind">
            {" "}
            <img src="./icons/twitter.png" />
          </a>
          <a href="https://www.youtube.com/channel/UCrSmEYax1hzppPkHg4pc-Bw/featured">
            <img src="./icons/youtube.png" />
          </a>
          <a href="https://www.instagram.com/lifeatkryptomind/">
            {" "}
            <img src="./icons/instagram.png" />
          </a>
          <a href="https://www.linkedin.com/company/krypto-mind">
            {" "}
            <img src="./icons/linkedin.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
