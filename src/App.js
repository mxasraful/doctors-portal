import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import { AuthContextProvider } from "./components/Login/useAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AuthContextProvider>
            <Switch>
              <Route path="/about">

              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </AuthContextProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
