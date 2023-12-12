import React from "react";
import { Button } from "@mui/material";
const SignUp = () => {
  return (
    <div>
      <center>
        <div
          style={{
            marginTop: 150,
            marginBottom: 10,
          }}
        >
          Welcome To Coursera
        </div>
      </center>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: 400,
          }}
        >
          Username
          <input type="text" />
          <br />
          Password <input type="password" />
          <br />
          <Button>Sign Up</Button>
        </div>
      </center>
    </div>
  );
};

export default SignUp;
