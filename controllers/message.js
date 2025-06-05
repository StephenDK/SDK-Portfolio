const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc:    New Message
// @route:   POST /api/v1/auth/message
// @access:  Public
exports.create_Message = [
  // Validation and sanitization rules
  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .isLength({ max: 50 })
    .withMessage("First name must be 50 characters or less")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First name must contain only letters and spaces"),
  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .trim()
    .isLength({ max: 50 })
    .withMessage("Last name must be 50 characters or less")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Last name must contain only letters and spaces"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("message")
    .notEmpty()
    .withMessage("Message is required")
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Message must be 1000 characters or less"),
  body("createdAt")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format")
    .toDate(),

  asyncHandler(async (req, res, next) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { firstName, lastName, email, message, createdAt } = req.body;

      // Check if email already exists (if uniqueness is required)
      const existingMessage = await Message.findOne({ email });
      if (existingMessage) {
        return res.status(400).json({
          errors: [
            { msg: "Email already exists. Please use a different email." },
          ],
        });
      }

      // Create new message
      const newMessage = new Message({
        firstName,
        lastName,
        email,
        message,
        createdAt: createdAt || new Date(),
      });

      // Save message to database
      await newMessage.save();

      console.log("[MESSAGE CREATED]: ", { firstName, lastName, email });

      res.status(201).json({
        success: true,
        message: "Message submitted successfully",
        data: {
          id: newMessage._id,
          firstName,
          lastName,
          email,
          createdAt: newMessage.createdAt,
        },
      });
    } catch (err) {
      console.error("[ERROR SUBMITTING MESSAGE]", err);
      res.status(500).json({
        success: false,
        errors: [{ msg: "Server error. Please try again later." }],
      });
    }
  }),
];
