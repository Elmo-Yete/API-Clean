const express = require ("express")
const router = express.Router();
const {login} = require ("../usecases/user.usecase")

router.post("/",async (req,res)=> {
    try {
        const token = await login(req.body.email,req.body.password)
        res.status(200)
        res.json ({
            succes:true,
            token
        })
    }catch(error) {
        res.status(error.status || 500);
        res.json ({
            succes:false,
            message:error.message
        })
    }
})



module.exports = router;