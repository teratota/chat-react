import { combineReducers } from 'redux';
import messages from './message';

export default combineReducers({
  message: messages,
});