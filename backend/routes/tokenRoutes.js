import express from "express";
<<<<<<< HEAD
import {
  createToken,
  getToken,
  listTokens,
  redeemToken
} from "../controller/tokenController.js";

const router = express.Router();

router.get("/", listTokens);
router.get("/:tokenId", getToken);
router.post("/create", createToken);
router.post("/redeem", redeemToken);
=======
import { createToken, redeemToken, getToken } from "../controller/tokenController.js";

const router = express.Router();

router.post("/create", createToken);   // ✅ NO ()
router.post("/redeem", redeemToken);   // ✅ NO ()
router.get("/:tokenId", getToken);     // ✅ NO ()
>>>>>>> 3d2fb74c8ea29d40ce66683d479116fb5d3c3b90

export default router;
