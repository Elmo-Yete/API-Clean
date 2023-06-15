const express = require ("express")
const router = express.Router();
const {register,login} = require ("../usecases/user.usecase")

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


module.exports = router;