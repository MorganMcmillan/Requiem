const mongoose = require("mongoose");
const Project = require("./Project");

const DevOrgSchema = new mongoose.Schema({
    name: String,
    description: String,
    contactInfo: [String],
    projects: [Project]
});

const DevOrganization = new mongoose.Model("DevOrganization", DevOrgSchema);

export default DevOrganization;