import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    car: {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalHours: {
      type: Number,

      required: [true, "Please provide a total hours"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Please provide a total amount"],
    },
    driverRequired: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String, // payment gateway transaction id
    },
    bookedTimeSlot: {
      from: {
        type: String,
        required: [true, "Please provide a start st"],
      },
      to: {
        type: String,

        required: [true, "Please provide a end date"],
      },
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
