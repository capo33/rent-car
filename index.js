import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/User.routes.js";
import carRoutes from "./routes/Car.routes.js";
import bookingRoutes from "./routes/Boooking.routes.js";

// load env variables
dotenv.config();

// Initialize express
const app = express();

// Set up port
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/cars", carRoutes);
app.use("/api/v1/bookings", bookingRoutes);


// Start server

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});