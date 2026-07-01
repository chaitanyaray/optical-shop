const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    brand: String,

    description: String,

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    imageUrl: String,

    imagePublicId: String,

    category: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    versionKey: false,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);