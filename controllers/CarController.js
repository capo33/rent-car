import CarModel from "../models/Cars.js";

// @desc    Get all cars
// @route   GET /api/cars
// @access  Public
export const getCars = async (req, res) => {
  try {
    const cars = await CarModel.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// @desc    Get a car by id
// @route   GET /api/cars/:id
// @access  Public
export const getCarById = async (req, res) => {
  try {
    const car = await CarModel.findById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// @desc    Create a car
// @route   POST /api/cars
// @access  Private
export const createCar = async (req, res) => {
  const car = req.body;
  const newCar = new CarModel(car);
  try {
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
} 
