import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: "DALL E Routes" })
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body

        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required' });
        }

        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })

        const image = response.data.data[0].b64_json;
        console.log(image)

        res.status(200).json({ photo: image })
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: 'Something went wrong' })
    }
})

export default router;
