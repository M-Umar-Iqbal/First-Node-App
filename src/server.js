const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { usersRoutes } = require('./routes');
const { errorHandler } = require('./middlewares/error');
const { notFoundMiddleware } = require('./middlewares/not-found');
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

// Routes
app.use('/api/v1/users', usersRoutes);

// 404 Handler - Catches all unmatched routes (must be after all routes but before error handler)
app.use(notFoundMiddleware);
// Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));
})