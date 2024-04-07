import React from "react";
import { Link } from "react-router-dom";

function TopStats(props) {
  const marginLeft = props.marginLeft;
  return (
    <Link className="soldier-top-stats w-inline-block">
      <div className="soldier-top-stats-h">{props.heading}</div>
      <div className="soldier-top-stats-info">
        <div className="soldier-top-stats-weapon">{props.subtitle1}</div>
        <div className="soldier-top-stats-weapon-s">{props.subtitle2}</div>
      </div>
      <img
        src={props.img}
        loading="eager"
        alt=""
        className="white-img"
        style={{ marginLeft: marginLeft }}
      />
      <img
        src={props.imgBlack}
        loading="eager"
        alt=""
        className="black-img"
        style={{ marginLeft: marginLeft }}
      />
    </Link>
  );
}

export default TopStats;
