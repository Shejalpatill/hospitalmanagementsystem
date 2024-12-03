import React from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import TextField from "@mui/material/TextField";
import logo from "../../Assests/images/logo - Copy.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent container">
        <div className="row aboveContent">
          <div className="logo col-3 d-flex align-items-center">
            <Link to="/">
              <img src={logo} alt="logo_image" />
            </Link>
          </div>
          <div className="quikLinks col-4">
            <h6>Important Links</h6>
            <ul>
              <li>
                <Link to="#">Appointment</Link>
              </li>
              <li>
                <Link to="#">Doctors</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
            </ul>
          </div>
          <div className="address col-4">
            <div className="contact-item">
              <RiDiscountPercentLine className="icon" />
              <span>Hospital HeartCare, 22, 2A Kotrud Road, beside State Bank of India, Hadapsar, Pune, Maharashtra 411028</span>
            </div>
            <div className="contact-item">
              <RiDiscountPercentLine className="icon" />
              <span>040 66846399</span>
            </div>
            <div className="contact-item">
              <RiDiscountPercentLine className="icon" />
              <span>Open 24 hours</span>
            </div>
            <div className="form-group">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  fullWidth
                  className="email-text"
                />
              </div>
          </div>
        </div>
        <div className=" mt-5 copyright d-flex align-items-center container ">
          <div>
          <p className="mb-2 mt-1">
            &copy; 2024. All rights reserved, Powered by Shejal.
          </p>
          </div>
         <div>
         <ul className="social-icons d-flex mb-0">
            <li className="list-inline-item">
              <Link to="/">
                <FaFacebookF />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">
                <IoLogoTwitter />
              </Link>
            </li>
          </ul>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
