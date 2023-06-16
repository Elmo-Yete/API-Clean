//!  Aqui se ejecutan los MIDDLEWARES 
//*  Aqui se pone el endpoint de home (se quita cuando se verifica que el endpoint jala)

const express = require ("express");
const app = express()
const cors = require("cors")


const routerKoder = require("./routes/koder.route")
const routerMentor = require("./routes/mentor.route")
const routerUser = require ("./routes/user.route")
const authUser = require ("./routes/auth.route")
app.use(cors())
app.use(express.json())

// * Primer midd
app.use("/koders",routerKoder);
app.use("/mentors",routerMentor)
app.use("/users",routerUser)
app.use("/auth",authUser)

app.get ("/",(req,res)=> {
    res.json("El server jala")
})

module.exports = app;

//* Se inician las rutas 


