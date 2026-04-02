import Token from "../model/Token.js";
import bcrypt from "bcrypt";

// 💰 Fake wallet (for hackathon)
let DEMO_BALANCE = 1000;

// ⏳ Helper for validity
const getExpiryTime = (validity) => {
  const now = Date.now();

  switch (validity) {
    case "1d":
      return new Date(now + 1 * 24 * 60 * 60 * 1000);
    case "7d":
      return new Date(now + 7 * 24 * 60 * 60 * 1000);
    case "30d":
      return new Date(now + 30 * 24 * 60 * 60 * 1000);
    case "365d":
      return new Date(now + 365 * 24 * 60 * 60 * 1000);
    default:
      return new Date(now + 15 * 60 * 1000); // fallback
  }
};

// ✅ CREATE TOKEN
export const createToken = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 🔥 ADD THIS

    const { amount, pin, validity } = req.body;

    if (!amount || !pin) {
      return res.status(400).json({
        success: false,
        message: "Amount and PIN required",
      });
    }

    if (DEMO_BALANCE < amount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient balance",
      });
    }

    DEMO_BALANCE -= amount;

    const hashedPin = await bcrypt.hash(pin, 10);

    const expiresAt = getExpiryTime(validity);

    const token = new Token({
      totalAmount: amount,
      remainingAmount: amount,
      tokenPin: hashedPin,
      expiresAt,
    });

    await token.save();

    res.status(201).json({
      success: true,
      token,
    });

  } catch (err) {
    console.error("ERROR:", err); // 🔥 ADD THIS
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const redeemToken = async (req, res) => {
  res.json({ message: "Redeem working" });
};

export const getToken = async (req, res) => {
  res.json({ message: "Get token working" });
};