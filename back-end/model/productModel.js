const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const produitSchema = new Schema({

    name:{
        type:String ,
        required:true 
    },
    price:{
        type:String ,
        required:true 
    },
    reference:{
        type:String ,
        required:true 
    }


})
module.exports = produit = mongoose.model('prod',produitSchema) 
