const { verify } = require("jsonwebtoken")

function isAuthenticated(req,res,next){

    // Receber o token
    const authToken = req.headers.authorization

    // Validar se token está preenchido
    if (!authToken){
        return res.status(401).end()
    }

    //
    const [,token] = authToken.split(' ')

    try {
        const { sub } = verify(
            token,
            "ufs_project"
            )
        req.user_id = sub 
        next()
        
    } catch (error) {
        return res.status(401).end()
    }
}

module.exports = {isAuthenticated}