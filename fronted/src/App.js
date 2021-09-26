import React, { createContext, useReducer } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Errorpage from './components/Error';

import {initialState, reducer} from './reducer/useReducer'
export const userContext= createContext();

const Routing =()=>{
  return (
    <>
      <Switch>
      {/* <app></app> */}
        <Route exact path="/home">
          <Home/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/signup">
          <Signup/>
        </Route>

        <Route path="/logout">
          <Logout/>
        </Route>

        <Route>
          <Errorpage />
        </Route>
        </Switch>
        {/* </userContext.Provider> */}
  </>
  )
}

const App=()=>{

  const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <>
        <userContext.Provider value={{state: dispatch}}>
          <Navbar />
          <Routing />
        </userContext.Provider>
      </>
    )
}

export default App;