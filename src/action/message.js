import { ADD_MESSAGE_ACTION, REMOVE_MESSAGE_ACTION } from '../action/action';

export const addMessage = (message, username) => {
  return {
    type: ADD_MESSAGE_ACTION,
    message,
    username,
  };
};

export const removeMessage = index => {
  return {
    type: REMOVE_MESSAGE_ACTION,
    index,
  };
};

/*export const getMessages = () => {
  return dispatch => {
    dispatch({ type: GET_MESSAGE_ACTION});

    return fetch("https ")
  }
}*/