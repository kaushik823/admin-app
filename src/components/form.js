import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const axios = require("axios");

function Form() {
const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [isget, issetget] = useState(false);
const [message, setmessage] = useState("");
var data = "";
const btnhandler = () => {
  axios
    .post("http://localhost:5000/userRegister", {
      name: name,
      email: email,
      password: password,
    })
    .then(function (response) {
      data = response.data;

      if (data._id != "") {
        issetget(true);
      } else {
        setmessage(response.message);
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);

    });
};
return (
    <div style={{width:"500px"}} className="py-5 px-5">
    <div className="form-group" >
      <label htmlFor="inputName">Name</label>
      <input type="text" id="inputName" className="form-control" 
        onChange={(e) => { setname(e.target.value) }} />
    </div>
    <div className="form-group">
      <label htmlFor="inputEmail">E-Mail</label>
      <input type="email" id="inputEmail" className="form-control"
      onChange={(e) => { setemail(e.target.value) }} />
    </div>
    <div className="form-group">
      <label htmlFor="inputSubject">Password</label>
      <input type="text" id="inputSubject" className="form-control"
       onChange={(e) => { setpassword(e.target.value) }} />
    </div>
    {/* <div className="form-group">
      <label htmlFor="inputMessage">Message</label>
      <textarea id="inputMessage" className="form-control" rows={4} defaultValue={""} />
    </div> */}
    <div className="form-group">
      <input type="submit" className="btn btn-primary" defaultValue="Send message" onClick={btnhandler} />
    </div>
  </div>



);
}
export default Form;

