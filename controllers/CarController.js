import CarModel from "../models/Car.js";

// @desc    Get all cars
// @route   GET /api/cars
// @access  Public
const getCars = async (req, res) => {
  try {
    const cars = await CarModel.find({}).sort({ _id: -1 });
    console.log("cars", cars);
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Get a car by id
// @route   GET /api/cars/:id
// @access  Public
const getCarById = async (req, res) => {
  try {
    const car = await CarModel.findById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Update a car
// @route   PUT /api/cars/:id
// @access  Private
const updateCar = async (req, res) => {
  try {
    const car = await CarModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc    Create a car
// @route   POST /api/cars
// @access  Private
const createCar = async (req, res) => {
  try {
    const newCar = new CarModel(req.body);
    await newCar.save();
    res.status(201).json({
      success: true,
      data: newCar,
      message: "Car created successfully",
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// @desc    Delete a car
// @route   DELETE /api/cars/:id
// @access  Private
const deleteCar = async (req, res) => {
  try {
    const car = await CarModel.findById(req.params.id);
    if (car) {
      await car.deleteOne();
      res.status(200).json({ message: "Car deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getCars, getCarById, updateCar, createCar, deleteCar };
