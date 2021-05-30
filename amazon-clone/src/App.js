import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from './StateProvider'
import {auth} from "./firebase"




function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if(authuser) {
        //user is logged in

        dispatch({
          type: "SET_USER",
          user: authuser
        });
      } else {
        //user is logged out
        
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return() => {
      unsubscribe();
    }
  
  }, []);

 






  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
