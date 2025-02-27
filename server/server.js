import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js'
import router from "./routes/post.routes.js";

const app = express();
app.use(express.json(), cors());
dotenv.config();



app.listen( port, () => console.log(`Listening on port: ${port}`) );