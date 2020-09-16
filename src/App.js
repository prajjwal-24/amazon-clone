import React, {useEffect} from 'react';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { auth } from './Firebase';
import { useStateValue } from "./StateProvider"

function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is ", authUser)

      if(authUser){

        dispatch({
          type:"SetUser",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SetUser",
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="App">
      {/* header*/ }
    <Header/>
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
    <Route path="/checkout">
    <Checkout/>
    </Route>

      <Route path="/">
      
      
      {/* home*/ }
      <Home/>
      </Route>

      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
