import User from '../models/userModel.js';
import bcrypt from "bcrypt";
export const login = async (req, res) =>{
    const{email, password} = req.body
    console.log(req.body);

    try{
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(404).json({message: "User Not Found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({message : "Invalid credentials"})
        }

        res.status(200).json({message: "login sucessful"});
        
    } catch (error){
        res.status(500).json({ message : "Internal Server Error", error})
    }
};



export const register = async (req, res) =>{
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
        res.status(500).json({message : "Internal Server Error", error})
    }
};





