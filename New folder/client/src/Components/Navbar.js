import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import '../Components/Navbar.css';
import { UserContext } from '../App';

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

function Navbar() {
  const {state, dispatch} = useContext(UserContext);
  const Rendermenu = () => {
    if(state) {
      return (
        <>
        <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>     
      <li class="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
        </>
      )
    }else {
      return (
        <>
        <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
     
        </>
      )
    }
  }
  return (
      <>
      <div class="fixed-top">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <div className="navbar-brand" href="#">Navbar</div> */}
  <img class ="logo" src = "data:image/png;base64,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"/>
  <button className="navbar-toggler" id="hamburger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="input-group">
  <div class="form-outline">
    <input id="search-focus" type="search" id="form1" class="form-control"  placeholder="Search..."/>
  
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div> 

  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">      
    <ul className="navbar-nav ms-auto">        
      <Rendermenu />
     
    </ul>
   
  </div>
</nav>
</div>

</>
  )
//   const hamburger = document.getElementById('hamburger')
//   window.onclick = function () {

//     document.onclick = function (div) {
//         if (div.target.id !== 'hamburger') {
//             return box.style.display = 'none';
//         }
//     }
// }
  
}

export default Navbar;