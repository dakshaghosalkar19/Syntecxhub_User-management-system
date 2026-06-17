const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connects to your local MongoDB instance on port 27017
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;