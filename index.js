import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors'
import mongoose from "mongoose";

import dalleRouter from './routes/dalle.routes.js'
import videoRouter  from './routes/gallery.routes.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json({limig: "50mb"}));

app.use('/api/v1/dalle', dalleRouter)
app.use("/api/gallery", videoRouter);

app.get('/', (req, res) => {
    res.status(200).json({message: 'DALLY E'})
})

const connect = () => {
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log('connected to MongoDB')
    })
    .catch((err)=>{
        throw err
    })
}



app.listen(8080, ()=> {
    connect()
    console.log('Server has started on port 8080')
})