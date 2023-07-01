import express from "express";

const app = express();
const PORT = 3001 || process.env.PORT;

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


