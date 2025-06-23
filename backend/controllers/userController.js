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

const bcrypt = require('bcrypt');

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare entered password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

module.exports = {
  createUser,
  loginUser
};
const { createUser, loginUser } = require('../controllers/userController');

router.post('/register', upload.single('profileImage'), createUser);
router.post('/login', loginUser); // ⬅️ New login route


module.exports = { createUser };
