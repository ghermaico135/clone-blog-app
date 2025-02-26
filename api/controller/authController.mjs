import db from "../db.mjs"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const register = (req,res) =>{
        const q = "SELECT * FROM users WHERE email= ? OR username = ?"
        db.query(q, [req.body.email,req.body.username], (err, data) =>{
            if(err) return res.status(500).json(err)
            if(data.length) return res.status(409).json("User already exists")
            
            // Hash the password and create user
    
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password,salt)
    
            const insertq = "INSERT INTO users(username,email,password) VALUES (?,?,?)"
            const values = [req.body.username,req.body.email,hash]
    
            db.query(insertq,values,(err,data) =>{
                if(err) return res.status(500).json(err)
                return res.status(200).json("User has been created")
            })
        })
    
        }

export  function login (req,res){
    // checkUser name
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data) =>{
       
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("User not found")

        let user = data[0]
        console.log("Stored Hashed Password:", user.password);
        console.log("Entered Password:", req.body.password);
        
        // check password
        const isPasswordCorrect = bcrypt.compare(req.body.password, user.password)
        console.log(isPasswordCorrect)
       
        if(!isPasswordCorrect) return res.status(400).json("wrong username or password ")

        const token = jwt.sign({id: user.id},"jwtmikikey",{
            expiresIn: "1h", // Token expires in 1 hour
        })
        const { password, ...other} = user
        res.cookie("access_token",token,
            {
            httpOnly:true,
           
        }).status(200).json(other)

        })

    // return res.sendStatus(200)
    }


   










export function logout(req,res){
    
    }
