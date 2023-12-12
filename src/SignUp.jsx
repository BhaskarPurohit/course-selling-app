import React from "react";
import { Button ,Card,TextField} from "@mui/material";
import {useState} from "react"


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div >
        {/* <h1>{email}</h1>
        <h1>{password}</h1> */}
      <div>
        <div
          style={{
            paddingTop:150,
            marginBottom: 10,
            display:"flex",
            justifyContent:"center"
          }}
        >
          Welcome To Coursera
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
          <TextField id={"username"}
          fullWidth={true}
          label="Email"
          variant="outlined"
          type="text" 
          onChange={(e)=> setEmail(e.target.value)}/>
          <br /> <br />
          <TextField id={"password" }
          fullWidth={true}
          label="Password"
          variant="outlined"
          type={"password"}
          onChange={(e)=> setPassword(e.target.value)} />
          <br />
          <br />
          <Button style={{backgroundColor:"#2196F3",
        color:"white"}} size={"large"} variant="contained"
        
        onClick={()=>{
            // let element = document.getElementById("username")
            
            // console.log(element.value);
            fetch("http://localhost:3000/admin/signup",{
                method:"POST",
                body: JSON.stringify({
                    username:email,
                    password:password
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then((res)=>{
                return res.json()

            }).then((data)=>{
                // console.log(data);
                //store token in local storage of browser
                localStorage.setItem("token", data.token)
                // console.log(data.token);
            })
           
        }}
             >Sign Up</Button>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
