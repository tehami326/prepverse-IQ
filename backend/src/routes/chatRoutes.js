import express from "express"
import { getStreamToken } from "../controllers/chatController"
import { protectRoutes } from "../middleware/protectRoute"

const router = express.Router()

router.get("/token", protectRoutes, getStreamToken)

export default router