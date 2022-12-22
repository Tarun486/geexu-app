import React from "react";
import { BrowserRouter,Routes, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import PublicRoute from "./Utility/PublicRoute";
import PrivateRoute from "./Utility/PrivateRoute";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/login">Login</NavLink>
          <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
          <NavLink activeClassName="active" to="/homepage">HomePage</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route  path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </div>
        <div className="homepage"></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
