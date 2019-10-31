import React from 'react';
import MessageItem from './MessageItem';
import { connect } from 'react-redux';
//import Emoji from 'react-emoji-render';

const list = { 
  borderColor: "grey",
  padding: 10,
  listStyle: "none" 
}

const MessageList = ({ messages }) => {
  return (
    <ul style={{ list }}>
      {messages.map((message, x) => {
        return <MessageItem key={x} index={x} message={message} />;
      })}
      <div>{messages.length === 0 && <p>Aucun message </p>}</div>
    </ul>
  );
};

const stateToProps = state => {
  return {
    messages: state.message.messages,
  };
};

const connectComponent = connect(stateToProps);

export default connectComponent(MessageList);


