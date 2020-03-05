const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//User Schema
const userSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:[true,"UserId is Required"]
    },

    name: {
        type:String, 
        required:[true,"Name is Required"]
    },

    email:{
        type:String,
        required:true
    },

    phone: {
        type:String,
        required:[true,"Phone is Required"]
    },

    dob: {
        type:Date,
        required:[true,"DOB is Required"]
    },

    address: {
        type:String, 
        required:[true,"Address is Required"]
    },

    // profileImg: {
    //     data: Buffer, 
    //     contentType: String,
    //     required:[false,"Upload a Image"]
    // },

    academic: {
        graduation: {type:String},
    },
    access_token:{
        type:String,
        require:true
    },

    deviceType: {
        type:Number,
        required:true,
        default: 0
    },

    deviceToken: {
        type:String,
        required: true,
        default:null
    },

    latitude: {
        type:String,
        required:[true,"Latitude is Required"],
        default:0.00
    },

    longitude: {
        type:String,
        required:[true,"Longitude is Required"],
        default:0.01
    },

    location: {
        type: {type:String,default:"Point"},
        coordinates:[Number]
    },

    is_blocked:{
        type:Number,
        default:0
    },

    is_active:{
        type:Number,
        default:0
    },

    isVerified : {
        type:Number,
        default:0
    },

    is_profile_created:{
        type:Number,
        default:0
    },

    created_on:{
        type:String,
        required:true
    },

    social_id:{
        type:String,
        default:null
    },

    social_type:{
        type:Number,
        default:0
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
