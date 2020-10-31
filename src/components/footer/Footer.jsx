import React, { Fragment } from "react";

// Styling
import "./footer.css";

const Footer = ({ onInputChange }) => {
  return (
    <Fragment>
    <div className="footer">
    <p><b>Created by <a href="https://ysubash.com.np/" target="_blank">@mathachew7</a></b></p>
    <p>No Copyright. Star me On Github</p>
  </div>
    </Fragment>
  );
};

export default Footer;
