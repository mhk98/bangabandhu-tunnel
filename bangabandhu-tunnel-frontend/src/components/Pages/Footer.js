import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-between footer py-3 p-8 mt-5 border-t border-base-300">
        <div className="text-centern w-full md:w-4/12 md:mb-0">
          <span className="footer-title">Touch With Us</span>
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            Banani,Dhaka
          </span>
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            mail.bba.gov.bd
          </span>
        </div>
        <div className="md:w-3/12  md:flex-wrap-reverse">
          <span className="footer-title">Company</span>
          <Link to="/aboutus">About us</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Help</Link>
        </div>
        <div className="md:w-3/12  md:flex-wrap-reverse">
          <span className="footer-title">Legal</span>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          <Link to="#">Privacy policy</Link>
          <Link to="#">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 footer-center border-t border-base-300">
        <div>
          <span>
            &copy; {new Date().getFullYear()} All right reserved by{" "}
            <Link to="#">CCCC.</Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
