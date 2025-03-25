const express = require("express");
const { getUserProfile, updateUserProfile, createUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Route to get user profile
router.get("/profile", authMiddleware, getUserProfile);

// Route to update user profile
router.put("/profile", authMiddleware, updateUserProfile);

// Route to create a new user
router.post("/create", createUser);

module.exports = router;
