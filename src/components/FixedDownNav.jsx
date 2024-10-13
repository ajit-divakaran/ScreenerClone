import React from "react";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Link } from "react-router-dom";
const FixedDownNav = () => {
  return (
    <div
      className="fixed-footer d-md-none w-100 px-2 pb-1 pt-2 d-flex justify-content-between"
      style={{ backgroundColor: "#484848" }}
    >
      <Link to={"/"} className="text-decoration-none">
      <NavItem
        img={"https://cdn-icons-png.flaticon.com/128/5868/5868234.png"}
        title={"Feed"}
      />
      </Link>
      <Link to={"/screens"} className="text-decoration-none">
        <NavItem
          img={"https://cdn-icons-png.flaticon.com/128/5752/5752153.png"}
          title={"Screens"}
        />
      </Link>
      <div>
        <button className="rounded-circle circle-btn">
          <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
        </button>
      </div>
      <NavItem
        img={"https://cdn-icons-png.flaticon.com/128/2963/2963823.png"}
        title={"Tools"}
      />
      <NavItem
        img={"https://cdn-icons-png.flaticon.com/128/1077/1077114.png"}
        title={"Account"}
      />
    </div>
  );
};

export default FixedDownNav;
