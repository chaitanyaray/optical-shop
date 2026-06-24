const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    rightEye: String,

    leftEye: String,

    notes: String,

    uploadedFile: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Prescription",
  prescriptionSchema
);