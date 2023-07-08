import express from "express";
import {
  getMyProfile,
  registerUser,
  loginUser,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", registerUser);

router.post("/login", loginUser);

router.get("/me", isAuthenticated, getMyProfile);

router.get("/logout", isAuthenticated, logout);

export default router;
