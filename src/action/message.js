import { ADD_MESSAGE_ACTION } from '../action/action';

export const addMessage = (message, username) => {
  let connection = new WebSocket('ws://127.0.0.1:8080');
console.log(message);
  connection.onopen = () => connection.send(JSON.parse(message));

  connection.onmessage = function (message) {
    try {
      var message = JSON.parse(message.data);
    } catch (e) {
      console.log('This doesn\'t look like a valid JSON: ',
          message.data);
      return;
    }
  }
  console.log(message);
  return {
    type: ADD_MESSAGE_ACTION,
    username,
    message
  };
};

/*export const getMessages = () => {
  return dispatch => {
    dispatch({ type: GET_MESSAGE_ACTION});

    return fetch("https ")
  }
}*/