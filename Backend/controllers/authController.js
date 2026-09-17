import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ message: "Name , Email and password are required" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "user already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashPassword
        });
        res.status(200).json({ message: "User registered sucessfully" });
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" 
             });
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email" 
            
             });
        }
        
        
        const userExists = await User.findOne({ email });
        
        if (!userExists) {
            return res.status(404).json({ 
                message: "user not registered , please signUp"
        
             })
        }
        const match = await userExists.matchPassword(password);
        if (match) {
            const id =  userExists._id;
            const token = jwt.sign({id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN || "1d" });
                console.log(match);
                res.status(200).json({
                    token, message: "login sucessfully" 
                })
        }
        else {
            res.status(400).json({ message: "Invalid password" 
            })
        }
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}

export const allUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            users: users,
            message: "user fetch sucessfully"
        })
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}
 
export const updateUser = async (req, res) => {
    try {
      const {id}=  req.params;
      const { name, email } = req.body;
      if (!email || !name) {
          return res.status(400).json({ message: "Name and Email are required" });
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        }
        
        const user = await User.findByIdAndUpdate(
            id,{name,email},
            { new: true, runValidators: true }
        ).select("-password");
        console.log(id,name,email);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}

export const deleteUser = async (req,res) => {
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if(user){
            res.status(200).json({message:"Deleted sucessfully"})
        }
        else
        {
            res.status(400).json({mesaage:"user not found"})
        }
    }
    catch(error){
        res.status(500).json({message:"server error"})
    }
}