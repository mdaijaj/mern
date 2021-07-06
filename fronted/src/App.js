import React from 'react';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Error';
import 'bootstrap/dist/css/bootstrap.css'

const App=()=>{
    return (
      <>
      <Navbar/>
      <Switch>
      {/* <app></app> */}
        <Route  path="/home">
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

        <Route path="/register">
          <Signup/>
        </Route>

        <Route>
          <Errorpage />
        </Route>
      </Switch>
      </>
    )
}

export default App;