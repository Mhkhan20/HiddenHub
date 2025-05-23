import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();




app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use ('/posts', postRoutes);


process.env.CONNECTION_URL = 'mongodb+srv://mhassanahmedkhan17:RF8yWsJ3amOdWqCH@cluster1.0n2nk.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster1';


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



