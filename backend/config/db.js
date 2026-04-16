const mongoose = require('mongoose');

let cachedConnection = null;

const connectDB = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }
    
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is missing from environment variables.");
        }
        const conn = await mongoose.connect(uri, { family: 4 });

        cachedConnection = conn;
        console.log('MongoDB Connected successfully!');
        return conn;
    } catch (error) {
        if (error.message.includes('ECONNREFUSED')) {
            console.error('MongoDB Connection Error: Connection Refused. Please check your internet connection or if your IP is allowlisted in MongoDB Atlas.');
        } else {
            console.error('MongoDB Connection Error:', error.message);
        }
        throw error;
    }

};

module.exports = connectDB;
