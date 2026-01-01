import express from "express";
import { addUserC } from "../controllers/userC.js";

const router = express.Router();
router.post("", addUserC);

export default router;
