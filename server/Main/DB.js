require("dotenv").config();

const mongoose = require("mongoose");

async function DataBase() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

module.exports = DataBase;