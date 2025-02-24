import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts1.mjs";
import usersRoutes from "./routes/users.mjs";
import authRoutes from "./routes/auth.mjs";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()

app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this frontend URL
    credentials: true, // Allow cookies if needed
}));

app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser())

app.use("/api/posts", postsRoutes)

app.use("/api/users", usersRoutes)

app.use("/api/auth", authRoutes)

app.listen(3000,()=>{
    console.log("app listening at port 3000")
})