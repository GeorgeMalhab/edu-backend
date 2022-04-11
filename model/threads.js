const mongoose = require("mongoose");

const Threads = mongoose.model(
    "threads",
    new mongoose.Schema({
        title: String,
        content: String,
        replies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reply'
        }]
    })
);

module.exports = Threads;