import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<<<< POWERFULL
  // piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return() => {
      // Any cleanup operations go in here
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

          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* we need a React-ROUTER */
}

{
  /*  localhost.com/ */
}
{
  /*  localhost.com/checkout */
}
{
  /*  localhost.com/login */
}

export default App;

// Link - doesnt refresh the page
// whereas Href refreshes the page
