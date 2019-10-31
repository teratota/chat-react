import React from "react";
import PropTypes from "prop-types";

const item = {
  marginBottom: 10,
  backgroundColor: "grey",
  color: 'white',
  width : 200,
  borderRadius: 10,
  padding: 10
};

//const d = new Date();

const MessageItem = ({ message }) => {
  return (
    <li
      style={item}>
      <p>{message.username}</p>
      {/* <p>{d.getTime()}</p> */}
      <div>{message.body}</div>
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default MessageItem;
