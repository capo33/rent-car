import dotenv from "dotenv";
import BookingModel from "../models/Booking.js";

import CarModel from "../models/Car.js";
import Stripe from "stripe";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "  2022-11-15",
});

// @desc    Book a car
// @route   POST /api/v1/bookings
// @access  Private
const bookCar = async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "eur",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: Math.random().toString(16),
      }
    );

    if (payment) {
      req.body.transactionId = payment.source.id;

      const booking = await BookingModel.create(req.body);

      // Update the car bookedTimeSlots array with the new booking time slot Object
      const car = await CarModel.findOne({ _id: req.body.car });
      // car.bookedTimeSlots.push({
      //   from: req.body.bookedTimeSlot.from,
      //   to: req.body.bookedTimeSlot.to,
      // });
      car.bookedTimeSlots.push(req.body.bookedTimeSlot);

      // save the car
      await car.save();
      res.status(201).json({
        success: true,
        data: booking,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment failed",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all bookings
// @route   GET /api/v1/bookings
// @access  Private
const getBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find().populate("car");

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/v1/bookings/:id
// @access  Private
const deleteBooking = async (req, res) => {
  try {
    const booking = await BookingModel.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await booking.deleteOne();

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export { bookCar, getBookings, deleteBooking };
