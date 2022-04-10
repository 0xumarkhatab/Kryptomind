import React from "react";
import "./Services.css";
import Service from "./Service";

function Services() {
  return (
    <div className="services">
      <div className="services__intro">
        <div className="services__left">
          <div>
            <h1>Our Services</h1>
          </div>

          <div className="hr">
            <hr />
          </div>
        </div>
        <div className="services__right">
          <h3>An overview of what we do.</h3>
          <p>
            With the help of the full-stack Blockchain services we build
            next-generation products and enable enterprises to launch more
            powerful financial infrastructure.
          </p>
          <br />
          <br />
          <br />
          <div className="all__services__button">
            <a href="#">All Services</a>
            <br />
            <hr />
          </div>
        </div>
      </div>
      <div className="services__list">
        <Service
          name="DeFi"
          description={
            "Kryptomind is a DeFi development company that helps start-ups and business enterprises replace the conventional banking system with a decentralized monetary system."
          }
        />
        <Service
          name={"Smart Contracts"}
          description={
            "We offer the most effective intelligent contract solutions to ensure that you benefit from the correct automation process to minimize operational costs and time."
          }
        />
        <Service
          name={"NFT’s"}
          description={
            "We assist you in launching your own NFT marketplace that provides your clients with a smooth purchasing experience/"
          }
        />
        <Service
          name={"Cryptocurrency Wallet"}
          description={
            "We are experienced in developing multi-currency crypto wallets that support many cryptocurrencies."
          }
        />
        <Service
          name={"Cryptocurrency Exchanges"}
          description={
            "Kryptomind specializes in providing cryptocurrency services and solutions, making it possible for individuals to buy, sell, and exchange different cryptocurrencies among them."
          }
        />
        <Service
          name={"Metaverse Development"}
          description={
            "With our expertise in Blockchain, we design and develop Metaverse components like 3D virtual spaces, Metaverse NFT marketplaces, Metaverse Applications, and Decentralized platforms."
          }
        />
      </div>
    </div>
  );
}

export default Services;
