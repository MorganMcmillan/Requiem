const mongoose = require("mongoose");
const Project = require("./Project");

const UserSchema = new mongoose.Schema({
    name: String,
    isBusiness: Boolean,
    // If not business (developer)
    isIndividual: Boolean,
    // If not individual
    organization: mongoose.Types.ObjectId,
    projects: [Project]
});

const User = new mongoose.Model("User", UserSchema);

export default User;