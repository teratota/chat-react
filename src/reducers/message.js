import { ADD_MESSAGE_ACTION } from './../action/action';

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

    default:
      return state;
  }
};

export default messages;
