const express = require("express");
const router = express.Router();
const { home, register } = require("../Controller/auth-controller");

// router.get("/" , (req , res)=>{

// } )
// home page
router.route("/").get(home);

// register page
router.route("/register").get(register);

module.exports = router;
