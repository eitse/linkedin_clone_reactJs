import React, { useState } from "react";
import NavItem from "./NavItem";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "./firebase";

function Header() {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  function getSearchData(event) {
    setSearchData(event.target.value);
  }

  function logoutUser() {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header flex flex-col md:flex-row max-w-full ">
      <div className="header--left">
        <img src="./images/linkedin_icon.jpg" alt="" />
        <div className="header--search">
          <SearchIcon />
          <input
            className="header--input"
            type="text"
            placeholder="Search"
            value={searchData}
            onChange={getSearchData}
          />
        </div>
      </div>
      <div className="header--right">
        <div className="nav--menu mt-2">
          <NavItem icon={HomeIcon} navTitle="Home" />
          <NavItem icon={PeopleIcon} navTitle="My Network" />
          <NavItem icon={WorkIcon} navTitle="Jobs" />
          <NavItem icon={MessageIcon} navTitle="Messaging" />
          <NavItem icon={NotificationsIcon} navTitle="Notification" />
          <div onClick={logoutUser} className="nav--profile">
            <Avatar
              src="./images/linkedin_icon.jpg"
              className="header--avatar--icon"
              alt=""
            />
            <div className="nav--text">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
