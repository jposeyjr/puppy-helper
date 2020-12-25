import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../Constants/actionsTypes';

import * as api from '../Api/index.js';

export const getPuppies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPuppies();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log('P get', error.message);
  }
};

export const createPuppy = (puppy) => async (dispatch) => {
  try {
    const { data } = await api.createPuppy(puppy);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log('P create', error.message);
  }
};

export const updatePuppy = (id, puppy) => async (dispatch) => {
  try {
    const { data } = await api.updatePuppy(id, puppy);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log('P update', error.message);
  }
};

export const deletePuppy = (id) => async (dispatch) => {
  try {
    await api.deletePuppy(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log('P delete', error.message);
  }
};
