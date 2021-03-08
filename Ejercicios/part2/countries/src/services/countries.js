import axios from 'axios';

const baseUrl = 'https://restcountries.eu';

export const getAll = () => {
  const request = axios.get(baseUrl + '/rest/v2/all');
  return request.then(response => response.data);
};