import mongoose from "mongoose"
import { ENV } from "./env.js"

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("Connected to MongoDb:", conn.connection.host)
    } catch (error) {
        console.error("Error connecting in MongoDb", error)
        process.exit(1)
    }
}