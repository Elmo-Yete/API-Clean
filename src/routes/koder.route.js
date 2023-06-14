//* Aqui se lee la request y respondemos   ROUTER: conjunto de rutas en una aplicacion

const express = require ("express");
const {list,getKoder,createKoder,update,deleteK} = require("../usecases/koder.usecase")

const router = express.Router();

router.get("/",async(req,res)=> {
    try {
        const koders = await list()
        // console.log(koders)
        res.json ({
            succes:true,
            data:koders
        })
    }catch(error){
        res.status(404)
        res.json({
            message:error.message,
            succes:false
        })
    }
})

router.get("/:id",async(req,res)=> {
    try {
        const caseKoder = await getKoder(req.params.id)
        // if (!caseKoder) {
        //     const error = new Error("koder not found")
        //     error.status(400)
        //     throw error
        // }
        res.status(200)
        res.json({
            succes:true,
            data:caseKoder
        })
    }catch(error){
        res.status(/*error.status ||*/ 404)
        res.json({
            succes:false,
            message:error.message
        })
    }
})

router.post("/",async (req,res)=> {
    try {
        const koder = await createKoder(req.body)
        res.status(201)
        res.json({
            succes:true,
            data:koder
        })
    } catch (error) {
        res.status(400)
        res.json({
            succes:false,
            message:error.message
        })
    }
})

router.patch("/:id", async (req,res)=> {
    try {
        const koder = await update(req)
        if (req.params.length < 8) {
            const error = new Error("No se ingreso ningun ID");
            error.status = 404;
            throw error
        }
        res.status(200)
        res.json({
            succes:true,
            data:koder
        })
    } catch (error) {
        // console.log("ERROR EN:",error)
        res.status(error.status || 400)
        res.json ({
            succes:false,
            message:error.message
        })
    }
})

router.delete("/:id",async (req,res)=>{
    try {
        const deleteById = await deleteK(req.params.id)
        res.status (200)
        res.json ({
            succes:true,
            message:"Koder eliminado"
        })
    }catch (error) {
        res.status(400)
        res.json({
            succes:false,
            message:error.message
        })
    }
})
module.exports = router;