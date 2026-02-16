const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Owner of the board
    name: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }], // Posts saved in this board
}, { timestamps: true });

/* INDEXES */
BoardSchema.index({ userId: 1 });        // Fast lookup for user's boards
BoardSchema.index({ createdAt: -1 });    // Sort boards by latest created

module.exports = mongoose.model("Board", BoardSchema);
