import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    }),
    app.on("error",(err)=>{
        console.log("Error: ",err);
        throw err;
    })
)
.catch((error)=>{
    console.log("MongoDB Connection Failed: ",error);
});









/*
import express from "express";

const app = express();
( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.error(error);
            throw error;
        });

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error(error);
        throw error;
    }
})();
*/