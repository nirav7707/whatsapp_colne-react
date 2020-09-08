import React from "react";
import "./css/chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import AddIcon from "@material-ui/icons/Add";
import SendIcon from '@material-ui/icons/Send';
const Chat = () => {
  return (
    <div className="chatbody">
      {
        //chat header
      }

      <div className="chat-header">
        <Avatar src="" />

        <div>
          <div>Nirav</div>
          <div style={{ fontSize: 10 }}>online</div>
        </div>
        <div>
          <IconButton>
            <SearchIcon color="action" />
          </IconButton>
          <IconButton>
            <AttachFileIcon color="action" />
          </IconButton>
          <IconButton>
            <MoreVertIcon color="action" />
          </IconButton>
        </div>
      </div>
      <div className="chat-content"></div>
      <div className="chat-input">
        <div style={{flex:0.5}}>
          <IconButton>
            <SentimentVerySatisfiedIcon color="action" />
          </IconButton>
        </div>
        <div style={{flex:5}}>
          <input style={{width:"100%",padding:3}} className="sidebar-input" type="text" placeholder="input.." />
        </div>
        <div style={{flex:0.5}}>
          <IconButton>
            <AddIcon color="action" />
          </IconButton>
        </div>
        <div style={{flex:0.5}}>
        <IconButton>
          <SendIcon color="action" />
        </IconButton>
      </div>
      </div>
    </div>
  );
};

export default Chat;
