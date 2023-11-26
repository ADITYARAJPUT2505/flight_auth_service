const express = require("express");
const { create } = require("../../controller/user_controller");

const router = express.Router();

router.post("/signup", create);

//router.delete("/signup", UserController.destroy);

module.exports = router;
