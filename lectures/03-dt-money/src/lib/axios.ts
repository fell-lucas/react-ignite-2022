import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333'
      : 'https://my-json-server.typicode.com/fell-lucas/react-ignite-2022-dt-money-db-pt/',
});
