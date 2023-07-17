import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id='footer'>
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>©2023 GPT-3<br /> All rights reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Overview</p>
        <p>ChatGPT</p>
        <p>DALL·E 2</p>
        <p>Careers</p>
        <p>Pricing</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Legal Information</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Safety Standards</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>©2023 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
