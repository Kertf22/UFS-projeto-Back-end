const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        default: "img/t",
    },
    posts:{
        type: Number,
        default: 0,
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

module.exports = mongoose.model("Users",UserSchema)