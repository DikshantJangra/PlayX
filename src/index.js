import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path:"./env"
})
connectDB()




/*
import mongoose from 'mongoose'
import  { DB_NAME } from './constants'
import express from 'express'

const app = express()

;(async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", ()=>{ // App.on is an express method used here
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR: ", error)
        throw new error
    }
})()
*/