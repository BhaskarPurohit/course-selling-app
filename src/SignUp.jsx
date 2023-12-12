import React from "react";

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
          <button>Sign Up</button>
        </div>
      </center>
    </div>
  );
};

export default SignUp;
