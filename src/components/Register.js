import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const axios = require('axios');
 function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isget, issetget] = useState(false);
  const [message, setmessage] = useState("");
  let navigate = useNavigate();

  var data = "";
  const register = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/userRegister", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        data = response.data;
        console.log(response);
        navigate('/Login')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // {
  //   if (isget) {
  //     return 
  //   } else{
  return (
    <>
   
    <div className="hold-transition register-page">
  <div className="register-box">
    <div className="register-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">Register a new membership</p>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Full name" value={name} onChange={(e) => { setname(e.target.value) }} />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Retype password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                <label htmlFor="agreeTerms">
                  I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
        
              <button type="submit" className="btn btn-primary btn-block" onClick={register}>
               
                Register
                </button>
                
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" />
            Sign up using Facebook
          </a>
          <a href="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" />
            Sign up using Google+
          </a>
        </div>
        <a href="login.html" className="text-center">
        <Link to="/">  I already have a membership</Link>
        <Link to="/Login"></Link>
          
            </a>
      </div>
      {/* /.form-box */}
    </div>{/* /.card */}
  </div>
  {/* /.register-box */}
</div>

    </>
  );
   
}

export default Register;
