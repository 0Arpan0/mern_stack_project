import React, {useState, useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../Components/Signup.css';
import {UserContext} from '../App';


function Login() {
  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = async(e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type": "application/json",

      },
      body:JSON.stringify( {
        email,
        password
      })
    });
    const data = res.json();

    if(res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    }else {
      dispatch({type:'USER', payload:true})
      window.alert ("Login Successful");
      history.push("/");
    }
    
  }
  return (
    <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <div className="container">
      
     
  <div class="row">
  <div className="col-sm">
      <img className="colorful-img" src="https://www.nicepng.com/png/full/138-1388174_login-account-icon.png" />
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Account</p>
    </div>
   
    <div className="col-sm">
      
  <form method = "POST">
    <h2>Login</h2>
    <br />
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value = {email}
    onChange = {(e) => setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" value = {password}
    onChange = {(e) => setPassword(e.target.value)} />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" id="submit" value = "log in" onClick={loginUser}>Submit</button>
</form>
    </div>
   
    
  </div>
</div>
<div className = "container-fluid">
      <h1>hello world</h1>
      </div>
</div>
   

    
    
  )
 
    
  
}

export default Login
