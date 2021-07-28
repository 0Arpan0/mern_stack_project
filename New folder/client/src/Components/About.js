import React, {useEffect, useState}from 'react';
import '../Components/About.css';
import {useHistory} from "react-router-dom";

function About() {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      
    }catch (err) {
      console.log(err)
      history.push('/login');
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div>
       <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class ="container" id = "container-1">
        <form method = "GET">
          <h1>About</h1>
          <label>{userData.email}</label>

        </form>
      </div>
    </div>
  )
}

export default About;
