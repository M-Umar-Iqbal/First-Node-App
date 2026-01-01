const mongoose = require("mongoose");

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017/NG_APP_DB`;
    await mongoose.connect(MONGO_URI, {}).then(() => console.log(`Connected to MongoDB: ${MONGO_URI}`)).catch(err => console.log(err));
}

module.exports = connectDB;