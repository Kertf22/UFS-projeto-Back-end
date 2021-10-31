const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
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
    user:{
        type: Object,
        default: {
            user_id:"",
            userName:"", 
            userImgUrl:""
        },
        required: true,
    },
    comments:{
        type: Array,
        default: [],
    },
    created_at: {
        type: Number,
    },
    updated_at:{
        type: Number,
    },
})

module.exports = mongoose.model("Posts",PostSchema)