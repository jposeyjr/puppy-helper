import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../Constants/actionsTypes';

import * as api from '../Api/index.js';

export const getPuppies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPuppies();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
