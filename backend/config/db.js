const mongoose = require('mongoose');

let cachedConnection = null;

const connectDB = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }
    
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is extremely missing from env vars.");
        }
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        cachedConnection = conn;
        console.log('MongoDB Connected successfully!');
        return conn;
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        throw error;
    }
};

module.exports = connectDB;
