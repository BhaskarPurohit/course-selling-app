import React from "react";

import SignUp from "./SignUp";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  
  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      backgroundColor:"#eeeeee"
    }}>
      <AppBar/>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
