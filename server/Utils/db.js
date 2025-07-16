const { default: mongoose } = require("mongoose");

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URI;
// console.log(MONGO_URL)

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
