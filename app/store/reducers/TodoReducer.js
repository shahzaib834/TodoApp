import {
  SET_SELECTED_ID_SUCESS,
  SET_SELECTED_NAME_SUCESS,
  SET_SELECTED_DETAIL_SUCESS,
  SET_DATA,
} from '../actions/types';

const INITIAL_STATE = {
  DATA: [],
  selectedId: '',
  selectedName: '',
  selectedDetail: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_ID_SUCESS:
      return {...state, selectedId: action.payload};
    case SET_SELECTED_NAME_SUCESS:
      return {...state, selectedName: action.payload};
    case SET_SELECTED_DETAIL_SUCESS:
      return {...state, selectedDetail: action.payload};
    case SET_DATA:
      return {...state, DATA: action.payload};
    default:
      return state;
  }
};
