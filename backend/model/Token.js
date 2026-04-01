// import mongoose from "mongoose";
// import crypto from "crypto";

// const Token= new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },

//   totalAmount: Number,
//   remainingAmount: Number,
//   tokenPin: String,
//   tokenId: String,
//   qrPayload: String,
//   expiresAt: Date,

//   status: {
//     type: String,
//     default: "active"
//   },

//   transactions: [
//     {
//       merchantId: String,
//       amount: Number,
//       timestamp: { type: Date, default: Date.now }
//     }
//   ],

//   failedAttempts: { type: Number, default: 0 },
//   isLocked: { type: Boolean, default: false }
// });

// // ✅ pre-save
// tokenSchema.pre("save", function (next) {
//   if (!this.tokenId) {
//     this.tokenId = crypto.randomBytes(8).toString("hex");
//   }

//   if (this.isNew) {
//     this.remainingAmount = this.totalAmount;
//   }

//   next();
// });

// export default mongoose.model("Token", Token);


