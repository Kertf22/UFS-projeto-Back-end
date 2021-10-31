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
    admim:{
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Number,
    },
    updated_at:{
        type: Number,
    },
})

module.exports = mongoose.model("Users",UserSchema)