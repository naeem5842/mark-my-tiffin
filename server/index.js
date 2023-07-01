import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());


const PORT = 3001 || process.env.PORT;
const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.whfbjoa.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("Connected to MongoDB atlas");
    }).catch((err)=>{
        console.error("Error while connecting to MongoDB Atlas", err);
});

app.get('/', (req, res)=>{
    try{
        res.send("server has returned a response");
    }
    catch(error){
        console.error(error);
        res.status(500).send('error from the server');
    }
});


app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`);
})


