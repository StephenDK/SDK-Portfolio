const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/dbConfig");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Connect Database
connectDB();

// Error Handler
const errorHandler = require("./middleware/error");

// PORT
const PORT = process.env.PORT || 8080;

// CORS Options
const corsOptions = {
  origin: "http://localhost:3000",
};

// Init Express App
const app = express();

// Increase payload limit to 10MB (or adjust as needed)
app.use(express.json());
app.use(express.urlencoded());

// Cors
app.use(cors(corsOptions));
// Configure app to use cookie parser

// Server static route to client
app.use(express.static("client/build"));

// Routes
const message = require("./routes/message");

// Authentication Routes
app.use("/api/v1/message", message);
// App invitations Routes

// Middleware
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
