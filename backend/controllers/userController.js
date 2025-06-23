const User = require('../models/user')
;
const bcrypt = require('bcrypt');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const profileImage = req.file ? req.file.filename : '';

    // 1. Hash the password 🔐
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 2. Create new user with encrypted password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profileImage
    });

    // 3. Save user
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = { createUser };
