import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./Routes/userRoutes.js";
import { residencyRoute } from "./Routes/residencyRoute.js";
dotenv.config()

const app=express();
const PORT=process.env.PORT || 8001;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});
app.use('/api/user',userRoute);
app.use('/api/residency',residencyRoute);