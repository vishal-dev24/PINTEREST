const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Post title
    description: { type: String }, // Optional description
    image: { type: String, required: true }, // Image URL
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who liked the post
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Creator of the post
}, { timestamps: true });


PostSchema.index({ userId: 1 });
PostSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Post", PostSchema);
