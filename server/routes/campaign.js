const express = require("express");
const router = express.Router();
const campaignController = require("../controllers/app/campaignController");

router.post("/register", campaignController.register);
router.get("/", campaignController.getRegistrations);

module.exports = router;
