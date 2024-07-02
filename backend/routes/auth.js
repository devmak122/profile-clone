const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchuser");



const JWT_SECRET = "HELLO DEV IS A GOOD DEV";


// router 1 create user 
router.post(
  "/createuser",
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters long"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({success, error: "A user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWT_SECRET, (err, token) => {
          success=true
        if (err) throw err;
        res.json({success, token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


//router 2 login auth
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      console.log("Login attempt with email:", email);
      let user = await User.findOne({ email });
      if (!user) {
        console.log("User not found.");
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        console.log("Incorrect password.");
        success=false
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" }, (err, token) => {
        if (err) throw err;
        success=true;
        res.json({success, token });
      });
    } catch (error) {
      console.error("Error during login:", error.message);
      
      res.status(500).send("Internal Server Error");
    }
  }
);


// router 3 user details  "/api/auth/getuser" .login required

router.post(
  "/getuser",
  fetchUser, // Corrected middleware import and usage
  async (req, res) => {
    try {
      userId=req.user.id; // This line is commented out, you might want to uncomment it or use another way to get the user ID
      const user = await User.findById(req.user.id).select("-password"); // Use req.userId to get te user ID
      res.json(user);
    } catch (error) {
      console.error("Error getting user details:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


module.exports = router;
