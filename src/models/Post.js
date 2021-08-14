const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    user_id:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        default: "",
    },
    comments:{
        type: Array,
        default: [],
    },
    created_at: {
        type: Number,
        default: Date.now(),
    },
    updated_at:{
        type: Number,
        default: Date.now(),
    },
})

module.exports = mongoose.model("Posts",PostSchema)