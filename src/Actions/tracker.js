import {
  FETCH_TRACKER,
  FETCH_TRACKER_ID,
  UPDATE_TRACKER,
  DELETE_TRACKER,
  CREATE_TRACKER,
} from '../Constants/actionsTypes';

import * as api from '../Api/index.js';

export const getStats = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: FETCH_TRACKER, payload: data });
  } catch (error) {
    console.log('T All', error.message);
  }
};

export const getById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchById(id);
    dispatch({ type: FETCH_TRACKER_ID, payload: data });
  } catch (error) {
    console.log('T ID', error.message);
  }
};

export const createTracker = (tracker) => async (dispatch) => {
  try {
    const { data } = await api.createTracker(tracker);
    dispatch({ type: CREATE_TRACKER, payload: data });
  } catch (error) {
    console.log('T Create', error.message);
  }
};

export const updateTracker = (id, tracker) => async (dispatch) => {
  try {
    const { data } = await api.updateTracker(id, tracker);
    dispatch({ type: UPDATE_TRACKER, payload: data });
  } catch (error) {
    console.log('T Update', error.message);
  }
};

export const deleteTracker = (id) => async (dispatch) => {
  try {
    await api.deleteTracker(id);
    dispatch({ type: DELETE_TRACKER, payload: id });
  } catch (error) {
    console.log('T Delete', error.message);
  }
};
