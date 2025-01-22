const { CampaignForm } = require("../../models");

exports.register = async (req, res) => {
  try {
    const { name, mobile, email, business_type, description } = req.body;

    // Validation
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      return res.status(400).json({
        message: "Valid 10-digit mobile number is required",
      });
    }

    if (!business_type) {
      return res.status(400).json({ message: "Business type is required" });
    }

    // Create new campaign registration
    const registration = await CampaignForm.create({
      name,
      email,
      mobile,
      business_type,
      description,
      // campaign_name will use default value
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: registration,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};

exports.getRegistrations = async (req, res) => {
  try {
    const registrations = await CampaignForm.findAll({
      order: [["created_at", "DESC"]],
    });

    res.json({
      success: true,
      message: "Registrations retrieved successfully",
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    console.error("Get registrations error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving registrations",
      error: error.message,
    });
  }
};
