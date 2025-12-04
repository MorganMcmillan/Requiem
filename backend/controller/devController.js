const express = require("express");
const router = express.Router();

const User = require("../model/User");
const Project = require("../model/Project");

router.use(express.static("/developer"))

router.post("register", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: `Error registering user: ${error}`});
    }
});

router.post("login", (req, res) => {
    // TODO: add JWT validation using something and refresh tokens
});

// Developer API

// Project with all requirements, rendered as a static page
router.get("project", async (req, res) => {
    const id = req.body._id;
    const project = await Project.findOne({ _id: id });
    res.json(project);
})

// Submit a software project
router.post("project", async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: `Error creating project: ${error}`});
    }
});

// Update a project
router.put("project", async (req, res) => {
    try {
        const body = req.body;
        const project = await Project.update({ _id: body._id }, body);
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ message: `Error updating project: ${error}`});
    }
});

// Add a requirement to a project
router.post("project/requirement");

router.delete("project/delete", async (req, res) => {
    try {
        await Project.delete(req.body);
        res.status(204);
    } catch (error) {
        res.status(400).json({ message: `Error deleting project: ${error}`});
    }
})

// All projects in progress, rendered as a static page
router.get("projects", async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
});