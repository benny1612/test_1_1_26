import express from "express";

import { DecryptMessage, EncryptMessage } from "../controllers/messagesC.js";
import { userValdietM } from "../middlewares/Middleware.js";

const router = express.Router();
router.post("/encrypt", userValdietM, EncryptMessage);
router.post("decrypt", userValdietM, DecryptMessage);

export default router;
