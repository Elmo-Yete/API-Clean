//!  Aqui se ejecutan los MIDDLEWARES 
//*  Aqui se pone el endpoint de home (se quita cuando se verifica que el endpoint jala)

const express = require ("express");
const app = express()

const routerKoder = require("./routes/koder.route")

app.use(express.json())

// * Primer midd
app.use("/",routerKoder);

app.get ("/",(req,res)=> {
    res.json("El server jala")
})

module.exports = app;

//* Se inician las rutas 


