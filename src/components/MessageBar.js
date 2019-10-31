import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../action/message';
//import Emoji from 'react-emoji-render';

const display = { 
  padding: 10
};

const button = {
  color: "black",
  fontSize: 15,
  padding: 10,
  backgroundColor: "white"
};

const input = {
  fontSize: 16,
  padding: 10,
  marginRight: 10,
  borderRadius: 5
};

const username = prompt("nom d'utilisateur");

class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { message: '' };
  }

  handleChange(value) {
    this.setState({ message: value.target.value });
  }

  handleSubmit(value) {
    value.preventDefault();
    if (this.state.message !== '') {
      this.props.onAddMessage( username, this.state.message);
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display}}>
        <input onChange={this.handleChange} value={this.state.message} placeholder="Votre message" type="text" style={input}/>
        <button type="submit" style={button}>Envoyer</button>
      </form>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    onAddMessage: (username, message) => {
      dispatch(addMessage(message, username));
    },
  };
};

const connectComponent = connect(null, dispatchToProps);

export default connectComponent(MessageBar);






