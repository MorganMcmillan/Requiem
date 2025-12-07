const mongoose = require("mongoose");
const Project = require("./Project");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    isBusiness: Boolean,
    // If not business (developer)
    isIndividual: Boolean,
    // If not individual
    organization: mongoose.Types.ObjectId,
    projects: [Project]
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = new mongoose.Model("User", UserSchema);

export default User;