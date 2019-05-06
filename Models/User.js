let mongoose = require('mongoose');
let Schema = mongoose.Schema;


const ItemSchema = new Schema({
    username:{
        type:String,
        required: true,
        trim:true
        
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})


const user = mongoose.model('user',ItemSchema);
module.exports = user;