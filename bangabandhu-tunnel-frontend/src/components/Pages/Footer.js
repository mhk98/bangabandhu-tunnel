import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap footer p-10 mt-5 bg-neutral text-white">
        <div className="text-center w-full lg:w-4/12">
          <span className="footer-title">Touch With Us</span>
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            Khilkhet
          </span>
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            Projmantech@gmail.com
          </span>
        </div>
        <div className="w-full lg:w-3/12">
          <span className="footer-title">Company</span>
          <Link to="/aboutus">About us</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Help</Link>
        </div>
        <div className="w-full lg:w-3/12">
          <span className="footer-title">Legal</span>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          <Link to="#">Privacy policy</Link>
          <Link to="#">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 footer-center border-t bg-neutral text-white border-base-300">
        <div>
          <span>&copy; {new Date().getFullYear()} All right reserved by <Link to="#">CCCC.</Link></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
