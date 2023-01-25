import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true }, ()=>{
    console.log("Database connection sucessfully established"); 
});



app.get('/', (req, res)=>{
    res.send("OK");
});



app.get('/login', (req, res)=>{
    res.send({
        'msg': 'this is login route'
    })
})



app.listen(PORT , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server stared on port ${PORT}`);
    }
});