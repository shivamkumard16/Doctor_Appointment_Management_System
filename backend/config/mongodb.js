import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(
            ` MongoDB connected: ${db.connection.host}/${db.connection.name}`
        );
    } catch (error) {
        console.error(" MongoDB connection failed:", error.message);
        process.exit(1);
    }
}
