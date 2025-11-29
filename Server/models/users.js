const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/PHINIX-1")
mongoose.connect('mongodb+srv://spancovishal:HzLLrkUjyhrqFz3X@cluster0.bre00kg.mongodb.net/test-pinterest')
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("DB Error:", err);
    });

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    image: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    boards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Board" }]
})

module.exports = mongoose.model('User', userSchema)