//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")

const koderSchema = new mongoose.Schema ({
    name: {
        type:String,
        minlength:3,
        maxlength:12,
        required:true
    },
    age:{
        type:Number,
        min:18,
        max:100,
        required:true
    },
    module:{
        type:String,
        minlength:3,
        maxlength:12,
        required:true
    },
    generation:{
        type:String,
        minlength:3,
        maxlength:12,
        required:true
    },
    sex:{
        type:String,
        enum:["f","m","o"]
    }
})
//* El modelo se exporta
module.exports = mongoose.model("koders",koderSchema,"Koders");