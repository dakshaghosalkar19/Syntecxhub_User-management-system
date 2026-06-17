const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Initialize Database connection
connectDB();

// Built-in body parser middleware for JSON payloads
app.use(express.json());

// Main entry route configuration
app.use('/api/users', require('./routes/userRoutes'));

// Server listening port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));