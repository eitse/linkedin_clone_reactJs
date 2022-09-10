import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  function recentItem(post) {
    return (
      <div className="sidebar--recent--post">
        # {""} {post}
      </div>
    );
  }

  return (
    <div className="sidebar md:sticky ">
      <div className="sidebar--main--user flex flex-col ">
        <div className="sidebar--container1 mx-auto ">
          <div className="side--bgimage justify-center"></div>
          <div>
            <Avatar
              style={{
                height: 50,
                width: 50,
              }}
            />
          </div>
          <div className="sidebar--user--title">{user.displayName}</div>
          <div className="sidebar--user--email">ewumiitse@gmail.com</div>
        </div>
        <div className="sidebar--container2">
          <div className="sidebar--view--main">
            <div className="sidebar--viewed">Who viewed you </div>
            <span className="sidebar--view-digit">2545</span>
          </div>
          <div className="sidebar--view--main">
            <div className="sidebar--viewed">Views on post</div>
            <span className="sidebar--view-digit">1989</span>
          </div>
        </div>
      </div>

      <div className="sidebar--recent--main hidden md:flex flex-col">
        <div className="sidebar--recent--title">Recent</div>
        <div>
          {recentItem("Web Development")} {recentItem("Blockchain Developer")}
          {recentItem("React Frontend")} {recentItem("React Frontend")}{" "}
          {recentItem("Wordpress Dev")}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
