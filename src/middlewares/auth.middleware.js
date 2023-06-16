// * midd de rutas PRIVADAS

const jwt = require ("../lib/jwt.lib")



const auth =(req,res,next) => {
    try {
    //* verificar el token 
    const authorization = req.headers.authorization || ""
    // * del tipo BEARER  console.log("auto",authorization)
    const token = authorization.split(" ")[1];
    // * token de usuario console.log("token",token)
    const isVerified = jwt.verify(token)
    //** me regresa el email id ( iat y exp  ) console.log("verificado?",isVerified)
    next();
    }catch(error) {
        res.status(401)
        res.json({
            succes:false,
            message:error.message
        })
    }
}


const verify = (req,res,next) => {
    const authorization = req.headers.authorization || ""
    const token = authorization.split(" ")[1];
    const isVerified = jwt.verify(token)  // aqui vienen las propiedades del token email y id

    if (isVerified.id == req.params.id){
        console.log("si paso")
    }else {
        console.log("el id es diferente")
    }
}
module.exports = auth;
module.exports = verify;