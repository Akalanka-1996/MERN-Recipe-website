const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const recipeModel = mongoose.model('recipeModel', recipeSchema)

module.exports = recipeModel
