const { User, UserRole } = require("../models");

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, password, role_id } = req.body;
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role_id: role_id || 1,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [UserRole],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
