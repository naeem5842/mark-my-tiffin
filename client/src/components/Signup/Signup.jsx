import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Signup = () => {
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
          Register
        </Typography>

        <TextField
          sx={{ width: "70%" }}
          margin="normal"
          type="text"
          label="Name"
          variant="outlined"
        />

        <TextField
          sx={{ width: "70%" }}
          margin="normal"
          type="email"
          label="Email"
          variant="outlined"
        />

        <TextField
          sx={{ width: "70%" }}
          margin="normal"
          type="password"
          label="Password"
          variant="outlined"
        />

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="contained"
          color="warning"
        >
          Register
        </Button>
      </Box>
    </div>
  );
};

export default Signup;
