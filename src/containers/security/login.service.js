import axios from "axios";

const LOGIN_URL = `http://localhost:8081/login`;

class LoginService {


    login(username, password) {
        return axios.post(LOGIN_URL, { username, password }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem('user');
    }


    /*register(username,password){
        return axios.post(){
            r
        }
    }*/


    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}
export default new LoginService