import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date();
  return (
    <div>
      <div className="footer-root">
        <div className="main-container-root">
          <div className="footer-list-root">
            <div className="footer-list-section">
              <img
                src="/assets/logo/revvit-logo-white-v2.png"
                alt="image"
                className="footer-list-section-img"
              />
              <ul className="footer-list-first">
                <li>REVVIT</li>
                <li>BUYERS</li>
                <li>SELLERS</li>
                <li>LOCATIONS</li>
                <li>PRICING</li>
              </ul>
              <div className="break-line" />
              <div className="footer-privacy">
                <span>
                  &copy; {currentYear.getFullYear()} REVVIT All Rights Reserved
                </span>
                <span className="footer-privacy-devider">|</span>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of use</li>
                  <li>Accessibility</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
            <div className="footer-list-section-two">
              <img
                src="/assets/images/footer_car.png"
                alt="image"
                className="footer-list-section-two-img w-full h-full"
              />
              <div className="social-icon-section">
                <div className="social-ico-wrater flex-center">
                  <FaFacebookF className="social-icon" />
                </div>
                <div className="social-ico-wrater flex-center">
                  <FaTwitter className="social-icon" />
                </div>
                <div className="social-ico-wrater flex-center">
                  <FaLinkedinIn className="social-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
