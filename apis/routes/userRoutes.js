const express = require("express");
const router = express.Router();
const userController = require("../controllers/app/userController");

router.post("/", userController.createUser);
router.get("/", userController.getUsers);

module.exports = router;
