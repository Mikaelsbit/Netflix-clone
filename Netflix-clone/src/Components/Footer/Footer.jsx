import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon/>
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>contact us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift</li>
              <li>Netflix Shop</li>
              <li>Cookie Preferences</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <button>Service Code</button>
          <p>&copy; 1997-2025 Netflix, Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
