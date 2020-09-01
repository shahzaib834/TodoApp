import {
  SET_SELECTED_ID_SUCESS,
  SET_SELECTED_NAME_SUCESS,
  SET_SELECTED_DETAIL_SUCESS,
  SET_DATA,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';

export const setSelectedId = (selectedId) => {
  return {
    type: SET_SELECTED_ID_SUCESS,
    payload: selectedId,
  };
};

export const setSelectedName = (selectedName) => {
  return {
    type: SET_SELECTED_NAME_SUCESS,
    payload: selectedName,
  };
};

export const setSelectedDetail = (selectedDetail) => {
  return {
    type: SET_SELECTED_DETAIL_SUCESS,
    payload: selectedDetail,
  };
};

export const setDATA = () => async (dispatch) => {
  let data;
  try {
    const jsonValue = await AsyncStorage.getItem('@TodosKey');
    if (jsonValue != null) {
      data = JSON.parse(jsonValue);
    }
  } catch (e) {
    // error
  }
  return dispatch({
    type: SET_DATA,
    payload: data,
  });
};
