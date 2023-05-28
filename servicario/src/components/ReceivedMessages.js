import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMessages } from "reducers";
import { markMessageAsRead } from "actions";

const ReceivedMessages = ({ dispatch, messages }) => {
  const navigate = useNavigate();

  const handleMessageAsRead = (message) => {
    markMessageAsRead(message);
  };

  const goToCollaboration = (message) => {
    markMessageAsRead(message);
    navigate(message.cta);
  };

  const renderMessages = (messages) => {
    //if user has messages, returns this
    console.log("MESAJLAR : " ,messages);
    const filteredMessages = messages
      .filter((m) => !m.isRead)
      .map((message) => (
        <div key={message.id}>
          <div className="from-user">
            <span>From: </span> {message.fromUser.name}
          </div>
          <hr />
          <div className="navbar-item">
            <div> {message.text} </div>
            <div onClick={() => goToCollaboration(message)}>
              <div className="button is-success">Join</div>
            </div>
            <button
              onClick={() => {
                handleMessageAsRead(message);
              }}
              className="button is-warning"
            >
              Later
            </button>
          </div>
        </div>
      ));

    //if user has no messages, returns this
    if (filteredMessages.length === 0) {
      return <div className="navbar-item">No messages</div>;
    }
    return filteredMessages;
  };

  return renderMessages(messages);
};

const mapStateToProps = (state) => ({ messages: getMessages(state) });

export default connect(mapStateToProps)(ReceivedMessages);

//storing received message
