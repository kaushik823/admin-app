import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const axios = require('axios');
 function Login() {
  const [email, setemail]= useState('');
  const [password, setpassword]= useState('');
  const[massage,setmessage]= useState('');
  let navigate = useNavigate();
  const login=(e)=>{
    e.preventDefault();
    axios
      .post("http://localhost:5000/userLogin", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        var username = response.data.name;
        var userid = response.data._id;

        localStorage.setItem('Name',username)
        localStorage.setItem('Id',userid)

        var getname = localStorage.getItem('Name');
        var getid = localStorage.getItem('Id');
        console.log(getid);
        if(getname!== '')
        {
          navigate('/home');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
    
  
  return (
    <>
    <div className="login-box my-2">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form >
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e)=> setemail(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(e)=> setpassword(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block" onClick={login} >Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">
          <Link to='/register' className="text-center">Register a new membership</Link></a>
          <Link to='/'></Link>
            
       

      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>
{/* /.login-box */}
    </>
  )
}

export default Login;
