const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter a name"]
    },
    email: {
        type: String,
        required: [true, "Enter an email address"],
        unique: [true, "Email is already taken"]
    },
    password: {
        type: String,
        required: [true, "Enter a password"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);