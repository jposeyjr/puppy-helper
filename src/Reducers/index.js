import { combineReducers } from 'redux';

import puppies from './puppy';
import tracker from './tracker'

export const reducers = combineReducers({ puppies, tracker });
