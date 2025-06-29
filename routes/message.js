const express = require("express");

const { create_Message } = require("../controllers/message");
const router = express.Router();

// User Register Route
router.route("/new-message").post(create_Message);

module.exports = router;
