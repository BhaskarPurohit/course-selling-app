import { Typography, Button } from "@mui/material";
import React from "react";

const AppBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding:4
      }}
    >
      <div>
        <Typography variant={"h6"}>Coursera</Typography>
      </div>
      <div style={{display:"flex"}}>
        <div style={{marginRight:10}}>
          <Button variant={"contained"}>SignUp</Button>
          
        </div>
        <div>
            <Button variant={"contained"}>SignIn</Button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
