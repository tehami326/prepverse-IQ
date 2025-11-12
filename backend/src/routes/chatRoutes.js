import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoutes } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/token", protectRoutes, getStreamToken);

export default router;
