import axios from 'axios';

const url = 'http://localhost:5000/puppy';

export const fetchPuppies = () => axios.get(url);
export const createPuppy = (newPuppy) => axios.post(url, newPuppy);
export const updatePuppy = (id, updatedPuppy) =>
  axios.patch(`${url}/${id}`, updatedPuppy);
export const deletePuppy = (id) => axios.delete(`${url}/${id}`);
