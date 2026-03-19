require('dotenv').config(); // Load .env

const mongoose = require('mongoose');

async function DataBase() {
    try {
        await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

module.exports = DataBase;