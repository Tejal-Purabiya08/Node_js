import React, { useState } from 'react'
import axios from "axios"

function Login() {
    const [form,setForm]=useState({})

    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
       const res=await axios.post("http://localhost:3007/user/login",form)
       localStorage.setItem("token",res.data.token)
        alert("Login success")
    }
  return (
    <div>
        <h5>Login</h5>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='email' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login;
