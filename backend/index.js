import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import tokenRoutes from "./routes/tokenRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

// ✅ Middleware (IMPORTANT)
app.use(express.json());

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Hello From Server");
});

// app.use("/api/token", tokenRoutes);

// ✅ Start server AFTER DB connects
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});