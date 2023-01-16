import axios from 'axios';
import getHeaders from './utils/headerUtils';

export default axios.create({
  baseURL: 'https://kraftie-api.azurewebsites.net',
  headers: getHeaders(),
});
