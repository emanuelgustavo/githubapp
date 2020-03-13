//This api contain the axios default connection to api.github.com
import axios from 'axios';

const apiRepositories = axios.create({
  baseURL: `https://api.github.com/repos/`,
});

export default apiRepositories;