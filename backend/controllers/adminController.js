import validator from 'validator';
import bcrypt from 'bcrypt';
import { doctorModel } from "../models/doctorModel.js";
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({});

export const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: 'Missing fields. All fields are required' });
        }


        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'plase enter valid email' });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Password must be at least 8 characters long' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        const imageUrl = imageUpload.secure_url;
        const doctorData = {

            name,
            email,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            image: imageUrl,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        return res.json({ success: true, message: 'Doctor added successfully', message: "new doctor has beeen added" });
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
}

export const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!(email == process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)) {
            console.log("only admin add loged at this end point");
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        const token = jwt.sign(email + password, process.env.JWT_SECRET);

        return res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}