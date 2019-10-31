import React, { PureComponent } from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import Emoji from 'react-emoji-render';

const chatStyle = {
  display: "flex",
  flexDirection: "column"
};

class Chat extends PureComponent {
  state = {
    messages: []
  };

  handleOnSubmit = message => {
    const data = {
      body: message,
      username: "Thomas"
    };

    const newMessages = [...this.state.messages, data];
    this.setState({ messages: newMessages });
  };

  render() {
    return (
      <div style={chatStyle}>
        <div style={{ paddingLeft: 10, paddingTop: 10, fontSize: 30 }}>
        <Emoji text=" :+1: :) " /> Mon CHAT test
        </div>
        <MessageList messages={this.state.messages} />
        <MessageBar handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Chat;
