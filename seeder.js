import mongoose from "mongoose";
import dotenv from "dotenv";

import Car from "./data/Cars.js";
import connectDB from "./config/db.js";

// load env variables
dotenv.config();

// Connect to database
connectDB();

const importData = async () => {
  try {
    await Car.deleteMany();

    const sampleCars = Car.map((car) => {
      return { ...car };
    });

    await Car.insertMany(sampleCars);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Car.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
