import BookingModel from "../models/Booking.js";

// @desc    Book a car
// @route   POST /api/v1/bookings
// @access  Private
const bookCar = async (req, res) => {
  try {
    req.body.transactionId = "1234";

    const booking = await BookingModel.create(req.body);

    res.status(201).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { bookCar };