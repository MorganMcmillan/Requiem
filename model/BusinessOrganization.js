const mongoose = require("mongoose");
const Requirement = require("./Requirement");

const BusinessOrgSchema = new mongoose.Schema({
    name: String,
    description: String,
    contactInfo: [String],
    requirements: [Requirement]
});

const BusinessOrganization = new mongoose.Model("BusinessOrganization", BusinessOrgSchema);

export default BusinessOrganization;