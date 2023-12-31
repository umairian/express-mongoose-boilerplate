const { Router } = require("express");
const router = Router();

// Middlewares

// Controllers
const controller = require("../controllers/user.controller");

// Routes

router.post("/login", controller.login);

module.exports = router;
