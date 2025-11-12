const express = require("express");
const router = express.Router();

router.use(express.static("/business"))

router.post("register", (req, res) => {

})

router.post("login", (req, res) => {

})

// Submit a requirement
router.post("requirement", (req, res) => {

})

// Change a requirement
router.put("requirement", (req, res) => {

})

// Business entity API

// All information about the business
router.get(":id", (req, res) => {

})

// Every requirement this business has submitted, rendered as a static page
router.get("requirements/:id", (req, res) => {

})

