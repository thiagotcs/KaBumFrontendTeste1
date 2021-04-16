import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api

// https://my-json-server.typicode.com/arthurpc03/api-rocketshoes
// http://localhost:3333
// https://my-json-server-api.herokuapp.com
