const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  // Log to console for developer
  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key (MongoServerError with code 11000)
  if (err.name === "MongoServerError" && err.code === 11000) {
    const message = "Cannot create a duplicate resource";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  // MongoDB network/connection error
  if (err.name === "MongoNetworkError") {
    const message = "Database connection failed, please try again later";
    error = new ErrorResponse(message, 503);
  }

  // JSON Web Token error
  if (err.name === "JsonWebTokenError") {
    const message = "Please Authenticate";
    error = new ErrorResponse(message, 401);
  }

  // JSON Web Token expired
  if (err.name === "TokenExpiredError") {
    const message = "Session Expired";
    error = new ErrorResponse(message, 401);
  }

  // Catch-all for other MongoDB errors not specifically handled
  if (err.name && err.name.startsWith("Mongo") && !error.statusCode) {
    const message = "Unexpected database error occurred";
    error = new ErrorResponse(message, 500);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
