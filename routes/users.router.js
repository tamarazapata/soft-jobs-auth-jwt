import express from "express";
import { registerUser } from "../src/controllers/users.controllers.js"; 
import { createUserMiddleware } from "../middlewares/users.middleware.js"; 
const router = express.Router();

router.post('/register', createUserMiddleware, registerUser)

export default router;