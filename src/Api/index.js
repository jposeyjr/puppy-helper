import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchPuppies = () => axios.get(`${url}/puppy`);
export const createPuppy = (newPuppy) => axios.post(`${url}/puppy`, newPuppy);
export const updatePuppy = (id, updatedPuppy) =>
  axios.patch(`${url}/puppy/${id}`, updatedPuppy);
export const deletePuppy = (id) => axios.delete(`${url}/puppy/${id}`);

export const fetchData = () => axios.get(`${url}/tracker/`);
export const fetchById = (id) => axios.get(`${url}/tracker/${id}`);
export const createTracker = (newTracker) =>
  axios.post(`${url}/tracker/`, newTracker);
export const updateTracker = (id, updatedTracker) =>
  axios.patch(`${url}/tracker/${id}`, updatedTracker);
export const deleteTracker = (id) => axios.delete(`${url}/tracker/${id}`);
