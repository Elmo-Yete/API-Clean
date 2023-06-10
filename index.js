// * en el index SOLO se hara conexion con DB y prender el servidor

require ("dotenv").config()
const {DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME} = process.env
const express = require ("express")
const mongoose = require ("mongoose")

// TODOS:  Ocultar la URL para que nadie tenga acceso a la base de datos  con VARIABLES DE ENTORNO
const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


mongoose.connect(URL)
.then(()=> {
    console.log("Conexion a DB exitosa")
})
.catch((error)=> {
    console.log("Hay error",error)
})

const app = express();