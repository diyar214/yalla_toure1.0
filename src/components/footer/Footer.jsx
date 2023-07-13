import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="logo-container col">
          <h1>logo</h1>
          <p>Travel Company</p>
        </div>
        <div className="info-container col">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div className="info-container col">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div className="info-container col">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div className="info-container col">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>

        </div>
        
      </div>
      <hr />
      <div className="container text-center">
        <div className="row">
        <div className="social">
          <a href="#" col>
            <img src={facebook} alt="social" />
          </a>
          <a href="#" col>
            <img src={twitter} alt="social" />
          </a>
          <a href="#" col>
            <img src={instagram} alt="social" />
          </a>
        </div>
        <h6 className="copyright">
          &#169;Copyright.All right not reserved yet
        </h6>
      </div>
    </div>
    </div>
  );
}

export default Footer;
