import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import User from './src/models/userModel.js' 

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const PORT = 3001 || process.env.PORT;
const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.whfbjoa.mongodb.net/mark-my-tiffin?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB atlas");
  })
  .catch((err) => {
    console.error("Error while connecting to MongoDB Atlas", err);
  });


app.get("/", (req, res) => {
  try {
    res.send("server has returned a response");
  } catch (error) {
    console.error(error);
    res.status(500).send("error from the server");
  }
});

app.post("/login", (req, res) => {});

app.post("/register", async (req, res) => {
    console.log(req.body)
  const {name, email, password} = req.body


  try{
    const existingUser = await User.findOne({email});

    if(existingUser){
        return res.status(409).json({message : "User already exists!!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);


  
    const newUser = new User({
        name,
        email,
        password : hashedPassword
    });

    await newUser.save();
    res.status(201).json({message : "User registered sucessfully"});
  } catch(error){
    res.status(500).json({message : "Internal Server Error", error : error})
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
