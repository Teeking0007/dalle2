import express from 'express';
import mongoose from 'mongoose';
import Collections from '../mongodb/collections.js';

const router = express.Router()


router.route('/').get(async(req, res)=>{

    try {
        const allImages = await Collections.find()

        res.status(200).json(allImages)
        //res.status(200).json({data: allImages})
    } catch (error) {
        console.log(error)
    }
})

router.route('/').post(async(req,res)=>{
    const {posts} = req.body
    try {
        const newCollection = await Collections.create({
           img: posts
        })
        res.status(200).json(newCollection.img)

    } catch (error) {
        console.log(error)
    }
})
export default router