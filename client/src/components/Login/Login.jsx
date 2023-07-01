import React, { useState } from "react";
import "./Login.css";
import { TextField, Box, Typography, Button } from "@mui/material";
const Login = () => {
 
  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) =>{
    const{name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = ()=>{
    
  }


  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={500}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={5}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Typography variant="h2" padding={3} textAlign="center">
          Login
        </Typography>

        <TextField
          sx={{ width: "70%" }}
          margin="normal"
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <TextField
          sx={{ width: "70%" }}
          margin="normal"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="contained"
          color="warning"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
