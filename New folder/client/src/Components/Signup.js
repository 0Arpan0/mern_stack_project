import React, {useState} from 'react';
import { Navlink, useHistory } from 'react-router-dom';
import '../Components/Signup.css';


function Signup() {
  const history = useHistory()
  const [user, setUser] = useState( {
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value});

  }

  const PostData = async(e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch ('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })
    const data = await res.json();
    if(res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");

    }else {
      window.alert(" Registration Succesful");
      console.log(" Registration Successful");

      history.push("/login");
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
    <div className="container" id="signup-form">     
  
  <form method="POST">
    <h2>Sign up</h2>
    <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp"
    value = {user.name}
    onChange = {handleInputs} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"
    value = {user.email}
    onChange = {handleInputs} />    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
    <input type="email" className="form-control" id="phone" name="phone" aria-describedby="emailHelp"
    value = {user.phone}
    onChange = {handleInputs} />    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Profession</label>
    <input type="email" className="form-control" id="work" name="work" aria-describedby="emailHelp"
    value = {user.work}
    onChange = {handleInputs} />    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password"
    value = {user.password}
    onChange = {handleInputs} />    
  </div> 
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword"
    value = {user.cpassword}
    onChange = {handleInputs} />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="name" name="name" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" id="submit" onClick={PostData}>Register</button>
</form>
<br />
<div>
<img src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg" id="form-image" />
<p>Already a user?</p>
</div>
</div>
<div className = "container-fluid">
      <h1>hello world</h1>
      </div>
</div>
    
    
  )
 
}

export default Signup
