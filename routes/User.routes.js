import express from "express";
import * as userController from "../controllers/UserController.js";

// Router instance
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);


export default router;