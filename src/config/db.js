const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = require("./env");

const dbConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB Connected");
    } catch (error) {
      console.error("❌ MongoDB Connection Error:", error);
      process.exit(1); // Exit process on failure
    }
  };

module.exports = connectDB;
