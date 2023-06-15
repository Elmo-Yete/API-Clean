const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema ({
    name: {
        type:String,
        minlength:3,
        maxlength:12,
    },
    email: {
        type:String,
        match:/^.*@.*\..*$/,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    }
})

module.exports = mongoose.model("user",userSchema,"Users")


// * /^.*  INDICAS QUE PUEDE EMPEZAR CON CUALQUIER TIPO DE DATO (asdwa1846asd...wasdw)
// * /^.*@.*\..*$/ acepta cualquier caracter ( \. ) indica el caracter literal de .   para el .com