import React, {useState, useEffect} from "react";
import "./header.css";
import NetflixLogo from "../../assets/Images/Netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {

  const [bgColor, setBgColor] = useState("");

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    if (scrollPos > 100) {
      setBgColor("rgb(20,20,20)");
    } else {
      setBgColor("rgba(20,20,20,0.5)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Header_outer_contianer" style={{backgroundColor: bgColor}} id="heads">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} width="100" />
            </li>
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;