const express = require("express");
const router = express.Router();

router.get("login")
router.post("login")
router.get("register")
router.post("register")
router.get("details")

// If user is an individual developer
router.get("project")
router.get("project/details")
router.get("project/create")
router.post("project/create")
router.get("project/edit")
router.put("project/edit")
router.get("project/delete")
router.delete("project/delete")
