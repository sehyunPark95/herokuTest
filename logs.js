const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
    name:{
        type:String       
    },
    userInfo:{
        type:Array
    },
    userVariables:{
        type:Array
    },
    time:{
        type:String
    }
});

const Log = mongoose.model('Log',logSchema);

module.exports = {Log}