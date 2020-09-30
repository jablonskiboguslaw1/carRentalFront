import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getClientPanel() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getManagerPanel() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();