import crypto from "crypto";
import mongoose from "mongoose";

<<<<<<< HEAD
const tokenSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      default: "Demo User"
    },
    totalAmount: Number,
    remainingAmount: Number,
    tokenPin: String,
    tokenId: String,
    qrPayload: String,
    expiresAt: Date,
    status: {
      type: String,
      default: "active"
    },
    transactions: [
      {
        merchantId: String,
        amount: Number,
        timestamp: { type: Date, default: Date.now }
      }
    ],
    failedAttempts: { type: Number, default: 0 },
    isLocked: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

tokenSchema.pre("save", function (next) {
  if (!this.tokenId) {
    this.tokenId = crypto.randomBytes(8).toString("hex").toUpperCase();
  }

  if (this.isNew) {
    this.remainingAmount = this.totalAmount;
    this.qrPayload = JSON.stringify({
      tokenId: this.tokenId,
      amount: this.totalAmount,
      expiresAt: this.expiresAt
    });
  }
=======
// ✅ Schema variable name = Token
const Token = new mongoose.Schema({
  

  totalAmount: Number,
  remainingAmount: Number,
  tokenPin: String,
  tokenId: String,
  qrPayload: String,
  expiresAt: Date,

  status: {
    type: String,
    default: "active"
  },

  transactions: [
    {
      merchantId: String,
      amount: Number,
      timestamp: { type: Date, default: Date.now }
    }
  ],

  failedAttempts: { type: Number, default: 0 },
  isLocked: { type: Boolean, default: false }
});

// // ✅ Use SAME name here
// Token.pre("save", function (next) {
//   if (!this.tokenId) {
//     this.tokenId = crypto.randomBytes(8).toString("hex");
//   }

//   if (this.isNew) {
//     this.remainingAmount = this.totalAmount;
//   }
>>>>>>> 3d2fb74c8ea29d40ce66683d479116fb5d3c3b90

//   next();
// });

export default mongoose.model("Token", tokenSchema);
