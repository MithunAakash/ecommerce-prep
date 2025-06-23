const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createUser } = require('../controllers/userController');

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Route to create user with image upload
router.post('/register', upload.single('profileImage'), createUser);

module.exports = router;

