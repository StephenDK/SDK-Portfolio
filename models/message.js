const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please your first name"],
    index: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: [true, "Please your last name"],
    index: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

// Middleware to update the `updatedAt` field before saving
MessageSchema.pre("save", function (next) {
  this.createdAt = Date.now();
  next();
});

module.exports = mongoose.model("Message", MessageSchema);
