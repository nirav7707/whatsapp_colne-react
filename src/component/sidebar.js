import React from "react";
import MessageIcon from "@material-ui/icons/Message";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./css/sidebar.css";
import Roomcard from "./roomcard";
import { Avatar, IconButton } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      {
        //sidebar headern
      }
      <div className="sidebar-header">
        <Avatar
          alt="Remy Sharp"
          src="https://source.unsplash.com/user/erondu/50x50"
        />
        <div className="sidebar-right">
          <IconButton>
            <DonutLargeIcon color="action" />
          </IconButton>
          <IconButton>
            <MessageIcon color="action" />
          </IconButton>
          <IconButton>
            <MoreVertIcon color="action" />
          </IconButton>
        </div>
      </div>

      {
        //search component
      }
      <div className="sidebar-search-body">
        <div className="sidebar-search">
          <div>
            <SearchIcon />
          </div>
          <input className="sidebar-input" type="text" placeholder="search" />
        </div>
      </div>

      {
        //sidebar-info
      }
      <div className="sidebar-info">
        <Roomcard />
        <Roomcard />

        <Roomcard />
      </div>
    </div>
  );
};

export default Sidebar;
