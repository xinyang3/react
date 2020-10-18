import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function NameWithHandle() {
  return (
    <div className="message">
      <span className="name">your name</span>
      <span className="handle" >
        @yourhandle
      </span>
    </div>
  );
}
function Message() {
  return <div className="message">this is less than 140 chacters.</div>;
}
function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avattar"
    />
  );
}

const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <i className="fa	fa-reply	reply-button" />;
const RetweetButton = () => <i className="fa	fa-retweet	retweet-button" />;
const LikeButton = () => <i className="fa	fa-heart	like-button" />;
const MoreOptionsButton = () => (
  <i className="fa	fa-ellipsis-h	more-options-button" />
);

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Message />
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
