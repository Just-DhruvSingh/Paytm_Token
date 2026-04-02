import express from "express";
import { createToken, redeemToken, getToken } from "../controller/tokenController.js";

const router = express.Router();

router.post("/create", createToken);   // ✅ NO ()
router.post("/redeem", redeemToken);   // ✅ NO ()
router.get("/:tokenId", getToken);     // ✅ NO ()

export default router;