import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CarSchema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    image: {
      type: "String",
      required: true,
    },
    capacity: {
      type: "String",
      required: true,
    },
    feulType: {
      type: "String",
      required: true,
    },
    bookedTimeSlots: [
      {
        from: {
          type: "String",
          required: true,
        },
        to: {
          type: "String",
          required: true,
        },
      },
    ],
    rentPerHour: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", CarSchema);

export default Car;

