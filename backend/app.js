require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const errorHandler = require('./middleware/errorHandler');

const connectDB = require('./config/db');

const app = express();

// Health check for Vercel debugging
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Backend is connected!' }));

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database Connection contextually
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        next(err);
    }
});

// Routes
app.use('/api', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Only listen if not running as a Vercel serverless function
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
