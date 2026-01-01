import express from "express";
import { findUserC } from "../controllers/userC.js";
import { CheckUser } from "../dal/usersD.js";

const router = express.Router();
router.get("", CheckUser, findUserC);

export default router;
