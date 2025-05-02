import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/mongodb.js';
import { connectCloudinary } from './config/cloudinary.js';
import { adminRouter } from './routes/adminRoute.js';

// app config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();


// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//api endpoints

app.use('/api/admin', adminRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});



async function init(){
    await connectCloudinary();
    console.log("connected to cloudinary")
    app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Sucessfully running at port number ${PORT}`)
    })
}
init();



