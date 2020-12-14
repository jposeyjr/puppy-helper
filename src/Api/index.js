import axios from 'axios';

const url = 'http://localhost:5000/puppy';

export const fetchPuppies = () => axios.get(url);
