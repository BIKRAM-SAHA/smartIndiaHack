const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now}
});

module.exports.ContactMsg = mongoose.model('Message', messageSchema);