import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../css/login.css';

function Login() {
    
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
    
    
      const login = () => {
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

      const register = () => {
            const {username, password} = this.state;
            axios.post('/auth/create', {username, password})
            .then(user => {
                  this.props.loginUser(user.data);
                  this.props.history.push("/home");
            })  
      }

      return (
            <div className = "login">
                  <div className = "login_title">
                        <h1 >Timeline Generation Tool</h1>
                        <p className = "login_byAlex">by alex raia</p>
                  </div>
                  <div className = "login_email">
                        <p>Email</p>
                        <input type = "text" onChange = {e => this.setState({username: e.target.value})}/>
                  </div>
                  <div className = "login_password">
                        <p>Password</p>
                        <input type = "password" onChange = {e => this.setState({password: e.target.value})}/>
                  </div>
                  <div className = "login_buttons">
                        <button className = "login_button" onClick={this.login}>Login</button>
                        <button className = "login_button" onClick={this.register}>Register</button>
                  </div>
            </div>
      )
}

export default Login;