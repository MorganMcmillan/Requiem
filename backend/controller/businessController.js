const express = require("express");
const router = express.Router();

const User = require("../model/User");
const Requirement = require("../model/Requirement");
const BusinessOrganization = require("../model/BusinessOrganization");

router.use(express.static("/business"));

router.post("register", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: `Error registering user: ${error}`});
    }
});

router.post("login", (req, res) => {

})

// View a requirement
router.get("requirement", async (req, res) => {
    try {
        const requirement = await Requirement.find({ _id: req.body._id });
        res.json(requirement);
    } catch (error) {
        res.status(400).json({ message: `Error getting requirement: ${error}`});
    }
})

// Submit a requirement
router.post("requirement", async (req, res) => {
    const requirement = await Requirement.create(req.body);
    res.status(201).json(requirement);
})

// Change a requirement
router.put("requirement", async (req, res) => {
    try {
        const requirement = await Requirement.update({ _id: req.body._id }, req.body);
        res.json(requirement);
    } catch (error) {
        res.status(400).json({ message: `Error updating requirement: ${error}`});
    }
});

// Business entity API

// All information about the business
router.get("", (req, res) => {
    try {
        const business = BusinessOrganization.findOne({ _id: req.body._id});
        res.json(business);
    } catch (error) {
        res.status(400).json({ message: `Error getting business: ${error}`});
    }
})

// Every requirement this business has submitted, rendered as a static page
router.get("requirements", (req, res) => {
    try {
        const requirements = BusinessOrganization.find({ _id: req.body._id }).requirements;
        res.json(business);
    } catch (error) {
        res.status(400).json({ message: `Error getting requirements for business: ${error}`});
    }
})

router.get("organization", async (req, res) => {
    try {
        const organization = BusinessOrganization.findOne({ _id: req.body._id });
        res.status(201).json(organization);
    } catch (error) {
        res.status(400).json({ message: `Error getting organization: ${error}`});
    }
})

router.post("organization", async (req, res) => {
    try {
        const organization = BusinessOrganization.create(req.body);
        res.status(201).json(organization)
    } catch (error) {
        res.status(400).json({ message: `Error creating organization: ${error}`});
    }
})