const express = require("express")
const {listM,create,deleteM,update} = require ("../usecases/mentor.usecases")

const router = express.Router()

router.get("/",async(req,res)=> {
    try {
        const mentors = await listM()
        console.log(mentors)
        res.json ({
            succes:true,
            data:mentors
        })
    }catch (err) {
        res.status(404)
        res.json ({
            message:err.message,
            succes:false
        })
    }
})

router.post("/",async(req,res)=> {
    try {
        const mentor = await create(req.body)
        console.log(mentor)
        res.status(201)
        res.json ({
            succes:true,
            data:mentor
        })
    } catch(error) {
        res.status(400)
        res.json({
            succes:false,
            message:error.message
        })
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const mentor = await deleteM(req.params.id)
        res.status(200)
        res.json ({
            succes:true,
            message:"Mentor eliminado!"
        })
    }catch (error) {
        res.status(400)
        res.json ({
            succes:false,
            message:error.message
        })
    }
})

router.patch("/:id",async (req,res)=> {
    try{
        let id = req.params.id
        let body = req.body
        if (body.generations.isActive === true) {
            const allMentors = await listM()
        }
        const mentor = await update(id,body)
        res.status(200)
        res.json ({
            succes:true,
            data:mentor
        })
    }catch(error) {
        res.status(400)
        res.json ({
            succes:false,
            message:error.message
        })
    }
})

module.exports = router;