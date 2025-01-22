const { Op } = require("sequelize");
const { User, UserRole } = require("../../models");

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, password, role_id } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!email && !phone) {
      return res.status(400).json({
        message: "Either email or phone number is required",
      });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role_id: role_id || 1,
    });

    // Remove sensitive fields from response
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role_id: user.role_id,
      created_at: user.created_at,
    };

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userResponse,
    });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: [
          "password",
          "otp",
          "remember_token",
          "reset_token",
          "email_verify_token",
        ],
      },
      where: {
        deleted_at: null,
      },
      order: [["created_at", "DESC"]],
    });

    res.json({
      success: true,
      message: "Users retrieved successfully",
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};
