import {
  ADD_MESSAGE_ACTION,
  REMOVE_MESSAGE_ACTION,
} from './../action/action';

const INITIAL_STATE = {
  messages: [],
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        messages: [
          ...state.messages,
          { username: action.username, message: action.message  },
        ],
      };

    case REMOVE_MESSAGE_ACTION:
      return {
        messages: state.messages.filter((message, i) => i !== action.index),
      };

    default:
      return state;
  }
};

export default messages;
