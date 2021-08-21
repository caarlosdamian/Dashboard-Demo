import React from "react";
import "../../styles/sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
