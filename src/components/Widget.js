import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets--article">
        <div className="widgets--articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets--articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets--header">
        <h2>LinkedIn</h2>
        <InfoIcon />
      </div>
      {newsArticle("Afica Papa React is back", "Top News - 9099 readers")}
      {newsArticle("CoronoVirus: Nigeria Update", "Top News - 889 readers")}
      {newsArticle("Bitcoin: Breaks $22k", "Crypto News - 300 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 79 readers")}
      {newsArticle(
        "Africa Papa React Course Coming Soon",
        "Coding -15589 readers"
      )}
    </div>
  );
}

export default Widget;
