import express from "express";
import cors from 'cors';
import dalleRoute from "./Routes/dalleRoute.js";
import dbPost from "./Routes/dbPost.js";
import mongoose from "mongoose";
import connectDB from "./mongodb/connect.js";
import * as dotenv from 'dotenv'


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'))
app.use('/images', express.static('images'))







app.use('/api/dalle', dalleRoute)
app.use('/api/collections', dbPost)

app.get('/', (req, res)=>{
    res.send('hello world')
})


const startServer = async() => {

    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(8080, ()=>console.log('app is listening')) 
    } catch (error) {
        console.log(error)
    }
}

startServer();

