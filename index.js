// * en el index SOLO se hara conexion con DB y prender el servidor

require ("dotenv").config()
const {DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME} = process.env
const mongoose = require ("mongoose")
const server = require ("./src/server")

// TODOS:  Ocultar la URL para que nadie tenga acceso a la base de datos  con VARIABLES DE ENTORNO
const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


mongoose.connect(URL)
.then(()=> {
    console.log("Conexion a BD exitosa")
    server.listen(8080,()=> {
        console.log("La API esta arriba")
    })
})
.catch((error)=> {
    console.log("Hay error",error)
})



