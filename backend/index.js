import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import { ensureSampleTokens } from "./controller/tokenController.js";
import tokenRoutes from "./routes/tokenRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

function normalizeOrigin(origin) {
  return origin?.trim().replace(/\/+$/, "") || "";
}

const allowedOrigins = [
  process.env.FRONTEND_URL,
  ...(process.env.FRONTEND_URLS || "").split(",")
]
  .map(normalizeOrigin)
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      const normalizedOrigin = normalizeOrigin(origin);

      if (
        !normalizedOrigin ||
        allowedOrigins.length === 0 ||
        allowedOrigins.includes(normalizedOrigin)
      ) {
        return callback(null, true);
      }

      return callback(new Error("CORS origin not allowed"));
    }
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "FinTech token backend",
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "fallback"
  });
});

app.use("/api/token", tokenRoutes);

connectDB().then(async () => {
  try {
    await ensureSampleTokens();
  } catch (error) {
    console.log(`Sample token seed fallback active: ${error.message}`);
  }

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
