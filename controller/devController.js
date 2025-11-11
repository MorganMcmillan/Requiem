const express = require("express");
const router = express.Router();

router.use(express.static("/developer"))

router.post("register", (req, res) => {

})

router.post("login", (req, res) => {

})

// Developer API

// Project with all requirements, rendered as a static page
router.get("project")

// Submit a software project
router.post("project")

// Update a project
router.put("project")

// Add a requirement to a project
router.post("project/requirement")

// All projects in progress, rendered as a static page
router.get("projects")