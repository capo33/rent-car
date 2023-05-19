import express from "express";
import * as carController from "../controllers/CarController.js";

// Router instance
const router = express.Router();

router.get("/", carController.createCar);
router.get("/:id", carController.getCarById);
router.post("/", carController.getCars);


export default router;