import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://www.anapioficeandfire.com/api/',
    headers: {"Content-type": "application/json",}
  });

  export default instance;