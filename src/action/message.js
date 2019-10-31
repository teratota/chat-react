import { ADD_MESSAGE_ACTION } from '../action/action';

export const addMessage = (message, username) => {
  let connection = new WebSocket('wss://srrj6.sse.codesandbox.io/');
//console.log(message);
  const  obj = {
    "type" : "ADD_MESSAGE",
    "username" : username,
    "message" : message
  }
  console.log(obj);
  let msg = JSON.stringify(obj)
  console.log(msg);

  connection.onopen = () => connection.send(msg);

  connection.onmessage = function (message) {
    try {
      var message = (message.data);
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