import express from "express";
import * as carController from "../controllers/CarController.js";

// Router instance
const router = express.Router();

router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);
router.post("/", carController.createCar);

export default router;
