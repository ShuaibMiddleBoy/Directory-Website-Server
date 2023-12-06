const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  category: {
    type: mongoose.ObjectId,
    ref: "Categories",
  },
  titleName: {
    type: String, // Add the titleName field
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String, // Add the zip code field
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Listing", listSchema);