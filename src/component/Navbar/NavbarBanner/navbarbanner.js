import React from "react";
import "./navbarbanner.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom';
const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "Amazon miniT" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "Customer Service" },
    { name: "Fashion" },
    { name: "Home & Kitchen" },
  ]
  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optionsNavbarBanner">
          <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>

        {options.map((item, ind) => {
          return (
            <Link to={'/products'} className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </Link>
          );
        })}
      </div>
      <div className="navbarBannerRightSide">
        <img
          src="https://m.media-amazon.com/images/G/42/UAE-hq/2023/img/Prime/XCM_Manual_1536468_5320121_400x39_2X._CB614584056_.jpg"
          alt="amazonPrime Logo"
        />
      </div>
    </div>
  )
}

export default NavbarBanner;
