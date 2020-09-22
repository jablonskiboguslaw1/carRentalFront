import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import LoginService from '../containers/security/login.service'


const required = value => {
    if(!value){
        return(
            <div className = 'alert alert-danger' role = 'alert'>
                This field is required!
            </div>
        );
    }
};

class Login extends Component{
    constructor(props){
this.handleLogin = this.handleLogin.bind(this);
this.onChangeUsername = this.onChangeUsername.bind(this);
this.onChangePassword = this.onChangePassword.bind(this);


this.state= {
    username:"",
    password:"",
    loading:false,
    message:""};
}

}