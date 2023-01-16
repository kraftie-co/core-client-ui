import { load } from 'localStorage';
const getHeaders = () => {
  let authorization = load('user-token');
  if (authorization) {
    authorization = authorization.substr(1, authorization.length - 2);
  }
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + authorization,
  };
};
export default getHeaders;
