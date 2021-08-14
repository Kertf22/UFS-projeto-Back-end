const CreateUserService = require("../service/CreateUserService.js")

class CreateUserController {
    async handle(req, res){
        const createUserSerivce = new CreateUserService()
        const { name, password, imgUrl } = req.body;

        const user = await createUserSerivce.execute({name, password, imgUrl})

        return res.json(user)
    }
}

module.exports = CreateUserController