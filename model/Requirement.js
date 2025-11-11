const mongoose = require("mongoose");

const RequirementSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: [String],
    tags: [String],
    implementors: Number
});

const Requirement = new mongoose.Model("Requirement", RequirementSchema);

export default Requirement;