import express from "express"
import { add } from "../controller/usersController.mjs"
const router = express.Router()

router.get("/test",add)

export default router