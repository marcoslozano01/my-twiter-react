import axios from 'axios';
import config from '../config.js';

export default axios.create({
  baseURL: config.baseURL_API
});