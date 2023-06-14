const Mentor = require ("../models/mentor.model")

// ? Enlistar Mentores
const listM = () => {
    const mentors = Mentor.find()
    return mentors
}

// ? Crear un mentor
const create = (body) =>{
    const mentor = Mentor.create(body)
    return mentor
}

// ? Borrar un mentor
const deleteM = (id) =>{
    const mentor = Mentor.findByIdAndDelete(id)
    return mentor
}


const update = (id,body) => {
    const mentor = Mentor.findByIdAndUpdate(id,body,{returnDocument:"after"})
    return mentor
}

module.exports = {listM,create,deleteM,update}