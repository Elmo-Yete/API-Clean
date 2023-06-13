//TODOS:  Aqui ejecutamos Crear Actualizar...

const Koder = require ("../models/koder.model")


// ? Enlistar koders
const list = () => {
// * aqui se ejecuta el usecases para enlistar koders
    
    const koders = Koder.find();
    return koders;
}

const getKoder = (id) => {
    // * aqui se ejecuta el usecases para buscar koders
    const koder = Koder.findById(id)
    return koder
}

const createKoder = (body) => {
    const koder = Koder.create(body)
    return koder
}

const update = (request) => {
    const body = request.body
    const id = request.params.id
    // console.log(typeof(id))
    // console.log(id,body)
    const koder =  Koder.findByIdAndUpdate(id,body,{returnDocument:"after"})
    // console.log(koder)
    return koder
}

const deleteK = (id) => {
    const koder = Koder.findByIdAndDelete(id)
    return koder
}
module.exports = {list,getKoder,createKoder,update,deleteK}