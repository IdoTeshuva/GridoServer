const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = {
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"
    },
    email : {
        type: String,
        required:true,
        unique: true
    },
    isAdmin:{
        default: false
    }
}

module.exports= mongoose.model('User', UserSchema);