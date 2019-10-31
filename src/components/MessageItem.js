import React from 'react';


const item = {
  position: 'relative',
  marginBottom: 10,
  backgroundColor: 'grey',
  width: 200,
  padding: 10,
  borderRadius: 10,
}

const MessageItem = ({ message, index }) => {
  return (
    <li style={item}>
      <span>{message.username}</span>
      <div><p>{message.message}</p></div>
    </li>
  );
};


export default MessageItem;
