import express from "express";
import cors from "cors";

import activityLogger from "./middlewares/activityLoger.js"; 

import userRoutes from './routes/users.router.js'
import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use(activityLogger);


app.use(userRoutes)
app.use(authRoutes)

export default app;
