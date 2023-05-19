import express from "express";
import * as carController from "../controllers/CarController.js";

// Router instance
const router = express.Router();

router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.post("/", carController.createCar);


export default router;