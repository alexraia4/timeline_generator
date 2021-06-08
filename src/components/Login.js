import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../redux/user_reducer.js';

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
          username: "",
          password: ""
        };
        this.updateUser = this.updateUser.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
      }
    
    
    login() {
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password})
        .then(user => {
            if (user.data === "User not found" || user.data === "wrong password bro"){
                alert (user.data);
            }
            else{
                this.props.loginUser(user.data);
                this.props.history.push("/home");
            }
        })
        
    
        
    }

    register() {
        const {username, password} = this.state;
        axios.post('/auth/create', {username, password})
        .then(user => {
            this.props.loginUser(user.data);
            this.props.history.push("/home");
        })
        
    }
    
    updateUser (value) {
        this.setState({ username: value })
    }
    
    render() {
        return (
            <div className = "login">
                <p>Timeline Generation tool</p>
                <p>Email</p>
                <input type = "text" onChange = {e => this.setState({username: e.target.value})}/>
                <p>Password</p>
                <input type = "text" onChange = {e => this.setState({password: e.target.value})}/>
                <div className = "loginButtons">
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
            
        )
    }
}

export default connect(null, {loginUser})(Login);