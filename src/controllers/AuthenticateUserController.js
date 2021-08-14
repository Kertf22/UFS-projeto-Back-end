const AuthenticateUserService = require("../service/AuthenticateUserService.js")

class AuthenticateUserController {

    async handle(req,res){

        const { name, password } = req.body;
        
        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute(name,password);

        return res.json(token)
    }
}

module.exports = AuthenticateUserController