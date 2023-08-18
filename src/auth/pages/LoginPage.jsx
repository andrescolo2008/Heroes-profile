import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const LoginPage = () => {

  const lastPath=localStorage.getItem('lastPath') || '/'
  const {login}= useContext(AuthContext)
  const navigate =useNavigate()


  const onlogin=()=>{
 
    login('andres');
    navigate(lastPath),{
      replace:true
  }
}
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary"
      onClick={onlogin}
      >
        Login
        </button>
    </div>
  );
}
