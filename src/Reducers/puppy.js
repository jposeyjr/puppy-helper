/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../Constants/actionsTypes';

export default (puppies = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log('test');
      return action.payload;
    case CREATE:
      return [...puppies, action.payload];
    case UPDATE:
      return puppies.map((puppy) =>
        puppy._id === action.payload._id ? action.payload : puppy
      );
    case DELETE:
      return puppies.filter((puppy) => puppy._id !== action.payload);
    default:
      return puppies;
  }
};
