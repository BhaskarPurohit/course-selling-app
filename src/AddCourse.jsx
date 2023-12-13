import React, { useState } from "react";
import { Card, TextField,Button } from "@mui/material";


const AddCourse = () => {
    const [title ,setTitle] = useState("")
    const [description ,setDescription] = useState("")
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <Card variant="outlined" style={{width:400, padding:20}}>
        <TextField
          fullWidth={true}
          label="Title"
          variant="outlined"
          type="text"
          onChange={(e) => {setTitle(e.target.value)}}
        />
        <br />
        <TextField
          fullWidth={true}
          label="Description"
          variant="outlined"
          type="text"
          onChange={(e) => {setDescription(e.target.value)}}
        />
        <br />
        <Button
          style={{ backgroundColor: "#2196F3", color: "white" }}
          size={"large"}
          variant="contained"
          onClick={() => {
            const callback2=(data)=>{
                localStorage.setItem("token", data.token)
            }
            const callback1=(res)=>{
                res.json().then(callback2)
            }
            fetch("http://localhost:3000/admin/courses",{
                method:"POST",
                body: JSON.stringify({
                    title,
                    description,
                    imageLink:"",
                    published:true
                }),
                headers:{
                    "Content-type":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then(callback1)
           
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
};

export default AddCourse;
