import axios from 'axios';

export default axios.create({
  baseURL: 'https://kraftie-api.azurewebsites.net',
  headers: {
    'Content-type': 'application/json',
  },
});
