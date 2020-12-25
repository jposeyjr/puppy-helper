/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_TRACKER,
  FETCH_TRACKER_ID,
  UPDATE,
  DELETE,
  CREATE,
} from '../Constants/actionsTypes';

export default (trackingData = [], action) => {
  switch (action.type) {
    case FETCH_TRACKER:
      return action.payload;
    case FETCH_TRACKER_ID:
      return action.payload;
    case CREATE:
      return [...trackingData, action.payload];
    case UPDATE:
      return trackingData.map((puppy) =>
        puppy._id === action.payload._id ? action.payload : puppy
      );
    case DELETE:
      return trackingData.filter((puppy) => puppy._id !== action.payload);
    default:
      return trackingData;
  }
};
