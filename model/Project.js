const mongoose = require("mongoose");
const Requirement = require("./Requirement");

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    // Link to repository
    // Validate if not null that it is a URL
    repository: String,
    categories: [String],
    requirements: [Requirement]
});

const Project = new mongoose.Model("Project", ProjectSchema);

export default Project;