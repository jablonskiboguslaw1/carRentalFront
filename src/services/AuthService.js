import axios from "axios";

const API_URL = "https://boguslawjablonski.xyz:8443/login";


class AuthService {
  login(username, password) {
    return axios
      .post(API_URL , {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));

        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();