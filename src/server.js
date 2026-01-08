const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { usersRoutes } = require('./routes');
const { errorMiddleware } = require('./middlewares/error-middleware');
const { notFoundMiddleware } = require('./middlewares/not-found-middleware');
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use('/api/v1/users', usersRoutes);

// 404 Handler - Catches all unmatched routes (must be after all routes but before error handler)
app.use(notFoundMiddleware);
// Error Handler Middleware
app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB().catch(err => {
        console.error('Failed to connect to database:', err);
        process.exit(1);
    });
});