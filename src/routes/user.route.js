const express = require ("express")
const router = express.Router();

const {register,login,list,get} = require ("../usecases/user.usecase")

const auth = require ("../middlewares/auth.middleware")
const verify = require ("../middlewares/auth.middleware")

router.post("/",async(req,res)=> {
    try {
        const createdUser = await register(req.body)
        res.status(201)
        res.json ({
            succes:true,
            data:createdUser
        })
    }catch(error) {
        res.status(500)
        res.json({
            succes:false,
            message:error.message
        })
    }
})

router.get ("/",async (req,res)=>{
    try{
        const users = await list(req.query)
        res.json ({
            succes:true,
            message:users
        })
    }catch(error){
        res.status(500)
        res.json({
            succes:false,
            message:error.message
        })
    }
    
})

router.get ("/:id", auth, verify ,async(req,res)=>{
    try{
        const user = await get(req.params.id)
        const verify = await verify(req.params.id)
        res.status(200)
        res.json ({
            succes:true,
            message:user
        })
    }catch(error){
        res.status(400)
        res.json({
            succes:false,
            message:error.message
        })
    }
    
})
module.exports = router;


