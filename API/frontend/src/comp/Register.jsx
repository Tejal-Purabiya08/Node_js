import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"

function Register() {
    const [form,setForm]=useState({})
    const navigate=useNavigate()

    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        await axios.post("http://localhost:3007/user",form)
        alert("signup success")
        navigate("/login")
    }
  return (
    <div>
        <h5>Register</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='name' onChange={handleChange}/>
        <input type="email" name="email" placeholder='email' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Register
