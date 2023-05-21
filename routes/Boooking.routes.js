import express from "express";

import * as bookingController from "../controllers/BookingControllers.js";

// Router instance
const router = express.Router();

router.post("/", bookingController.bookCar);
router.get("/", bookingController.getBookings);

export default router;
