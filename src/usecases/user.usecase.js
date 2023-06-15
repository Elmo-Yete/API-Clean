const User = require ("../models/user.model")
const bcrypt = require('bcrypt');
const createError = require('http-errors')
const jwt = require("../lib/jwt.lib")

// * Hacer un registro de un nuevo user

const register = async (data) => {
    // * que tal compleja va a ser la password
    const saltRounds = 10
    // * que password voy a hashear y con cuanta salt se hara
    const hashedPass = await bcrypt.hash(data.password,saltRounds)
    // ! AL OBJETO DE DATA QUE ES EL REQUEST DEL USUARIO LE AGREGAMOS LA PASSWORD HASHEADA
    data.password = hashedPass
    // * creamos al usuario con la data
    const user = await User.create(data)
    // * lo retornamos
    return user
}

const login = async (email,passwordPLain) => {
    // * validar el email
    const user = await User.findOne({email})
    if(!user) throw createError(400,"Invalid data")
    // * validar la password
    const isValidPass = await bcrypt.compare(passwordPLain,user.password)
    if(!isValidPass) throw createError(400,"Invalid data")

    // * si es la pass y si es el email / se le da un json web token  JWT
    const token = jwt.sign({email:user.email, id: user._id })
    console.log("token",token)
return token
}

module.exports = {register,login}
