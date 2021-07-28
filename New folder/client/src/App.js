import React, {createContext, useReducer} from 'react';
import { Route } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Logout from './Components/Logout';
import { Switch } from 'react-router-dom';
import { initialState, reducer } from '../src/reducer/UseReducer';

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/about">
    <About />
    </Route>

    <Route path="/contact">
    <Contact />
    </Route>

    <Route path="/login">
    <Login />
    </Route>

    <Route path="/signup">
    <Signup />
    </Route>

    <Route path="/logout">
    <Logout />
    </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
 
  return (
   
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    </UserContext.Provider>

   
    
    </>
  )
}

export default App
