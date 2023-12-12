import React from "react";
import { Button ,Card,TextField} from "@mui/material";



const SignUp = () => {
  return (
    <div >
      <div>
        <div
          style={{
            paddingTop:150,
            marginBottom: 10,
            display:"flex",
            justifyContent:"center"
          }}
        >
          Welcome Back To Coursera.
          <br />
          SignIn
        </div>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
        <Card
          variant={"outlined"}
          style={{width:400, padding:20, border:"2px solid black"}}
        >
          <br />
          <TextField id="outline-basic"
          fullWidth={true}
          label="Email"
          variant="outlined"
          type="text" />
          <br /> <br />
          <TextField id="outline-basic" 
          fullWidth={true}
          label="Password"
          variant="outlined"
          type={"password"} />
          <br />
          <br />
          <Button style={{backgroundColor:"#2196F3",
        color:"white"}}>Sign In</Button>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
