const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "COMPLETED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);