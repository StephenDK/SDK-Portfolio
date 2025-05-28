const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc:    New Message
// @route:   POST /api/v1/auth/message
// @access:  Public
exports.create_Message = [
  // Validation rules
  body("firstName")
    .notEmpty()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Name must contain only letters (A-Z or a-z)"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  asyncHandler(async (req, res, next) => {
    try {
      console.log("[ADDING MESSAGE]: ", req.body);
    } catch (err) {
      console.log("[ERROR SUBMITTING MESSAGE]", err);
      next(err);
    }
  }),
];
