import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { ensureSampleTokens } from "./controller/tokenController.js";
import tokenRoutes from "./routes/tokenRoutes.js";
<<<<<<< HEAD
=======
import cors from "cors";
import { getToken } from "./controller/tokenController.js";
>>>>>>> 3d2fb74c8ea29d40ce66683d479116fb5d3c3b90

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

<<<<<<< HEAD
=======
// ✅ Middleware (IMPORTANT)
>>>>>>> 3d2fb74c8ea29d40ce66683d479116fb5d3c3b90
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.use("/api/token", tokenRoutes);
<<<<<<< HEAD
=======
// app.get("/:tokenId", getToken);
>>>>>>> 3d2fb74c8ea29d40ce66683d479116fb5d3c3b90

connectDB().then(async () => {
  await ensureSampleTokens();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
