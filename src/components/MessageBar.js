import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Emoji from 'react-emoji-render';

const display = { 
  padding: 10,
  display: "flex"
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


class MessageBar extends PureComponent {

  state = {username: "", message: "", hasError: false };

  handleOnChange = handle => {
    this.setState({ [handle.target.id]: handle.target.value, hasError: false });
  };

  handleOnSubmit = handle => {
    handle.preventDefault();

    if (this.state.message.length > 150){
      this.setState({ lengthError: true });
    }
    else if (this.state.message) {
      this.setState({ message: "" });
      this.props.handleOnSubmit(this.state.message);
    } else {
      this.setState({ hasError: true });
    }
  };

  render() {
    return (
      <div style={display}>
        <form onSubmit={this.handleOnSubmit}>
          <input id="message" onChange={this.handleOnChange} value={this.state.message} placeholder="Votre message" type="text" style={input} />
          <button style={button} type="submit" >Envoyer</button>
          {this.state.lengthError && <p>pas plus de 150 caractères <Emoji text=" :rage: " /></p>}
          {this.state.hasError && <p>renseigner un message <Emoji text=" :rage: " /></p>}
        </form>
      </div>
    );
  }
}

MessageBar.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

export default MessageBar;
