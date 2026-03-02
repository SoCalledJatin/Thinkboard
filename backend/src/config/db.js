import mongoose from 'mongoose';
import dns from 'dns';

// Use Google's public DNS servers for resolution
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            //family: 4, // Force IPv4
        });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1); // Exit the process with an error code
    }
};