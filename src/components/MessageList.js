import React, { Component, Fragment } from "react";
import MessageItem from "./MessageItem";
import Emoji from 'react-emoji-render';

class MessageList extends Component {
  render() {
    const dontMessage = this.props.messages.length > 0;

    const list = { 
      borderColor: "grey",
      padding: 10,
      listStyle: "none" 
    }

    return (
      <Fragment>
        <ul style={list}>
          {this.props.messages.length > 0 &&
            this.props.messages.map((message, i) => {
              return (
                <MessageItem handleOnClick={this.handleOnClick} key={i} message={message} />
              );
            })}
        </ul>
        {!dontMessage && <p>Aucun message <Emoji text=" ;( " /></p>}
      </Fragment>
    );
  }
}

export default MessageList;
