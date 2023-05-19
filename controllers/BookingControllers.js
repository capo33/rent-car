import BookingModel from "../models/Booking.js";
import CarModel from "../models/Car.js";

// @desc    Book a car
// @route   POST /api/v1/bookings
// @access  Private
const bookCar = async (req, res) => {
  try {
    req.body.transactionId = "1234";

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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { bookCar };
