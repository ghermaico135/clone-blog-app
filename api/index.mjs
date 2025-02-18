import express from "express";
import db from './db.mjs'
import postsRoutes from "./routes/posts1.mjs";
import usersRoutes from "./routes/users.mjs";
import authRoutes from "./routes/auth.mjs";

const app = express()

app.use(express.json())

app.use("/api/posts", postsRoutes)

app.use("/api/users", usersRoutes)

app.use("/api/auth", authRoutes)

app.listen(3000,()=>{
    console.log("app listening at port 3000")
})