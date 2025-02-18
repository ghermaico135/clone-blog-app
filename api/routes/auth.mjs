import express from "express"
import { authAdd } from "../controller/authController.mjs"
const router = express.Router()

router.get("/test" ,authAdd)

export default router