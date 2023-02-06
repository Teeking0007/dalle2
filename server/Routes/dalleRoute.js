import express from "express";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'

dotenv.config()

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.DALLE_API_KEY,
  });

const openai = new OpenAIApi(configuration);



router.route('/').get((req, res)=>{
    res.send('I am alive')
})

router.route('/').post(async(req, res)=>{
    try {
        const { prompt } = req.body
        
        const response = await openai.createImage({
            prompt,
            n: 4,
            size: "1024x1024"
          });
          
          const image = response.data.data
          res.status(200).json(image)

    } catch (error) {
        console.log(error)
    }
})


export default router
