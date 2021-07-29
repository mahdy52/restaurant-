const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const commandSchema = new Schema({

    name:{
        type:String ,
        required:true 
    },
    reference:{
        type:String ,
        required:true 
    }


})
module.exports = command = mongoose.model('command',commandSchema) 