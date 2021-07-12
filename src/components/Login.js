import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext.js'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import '../css/login.css'

function Login() {
    
      let history = useHistory()
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const { user, setUser } = useContext(UserContext);
    
    
      const login = () => {
            axios.post('/auth/login', {email, password})
            .then(user => {
                  if (user.data === "User not found" || user.data === "wrong password bro"){
                        alert (user.data)
                  }
                  else{
                        setUser({
                              uid: user.data.uid,
                              email: user.data.email
                        })
                        history.push("/home")
                  }
            })  
      }

      const register = () => {
            axios.post('/auth/create', {email, password})
            .then(user => {
                  setUser({
                        uid: user.data.uid,
                        email: user.data.email
                  })
                  history.push("/home")
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
                        <input type = "text" onChange = {e =>  setEmail(e.target.value)}/>
                  </div>
                  <div className = "login_password">
                        <p>Password</p>
                        <input type = "password" onChange = {e => setPassword(e.target.value)}/>
                  </div>
                  <div className = "login_buttons">
                        <button className = "login_button" onClick={login}>Login</button>
                        <button className = "login_button" onClick={register}>Register</button>
                  </div>
            </div>
      )
}

export default Login