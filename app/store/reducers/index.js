import {combineReducers} from 'redux';

import TodoReducer from './TodoReducer';

export default combineReducers({
  todo: TodoReducer,
});
