const CreateUserService = require("../service/CreateUserService.js")

class CreateUserController {
    async handle(req, res, next){
        const createUserSerivce = new CreateUserService();
        const { name, password } = req.body;

        var { location } = req.file;

        
        const token = await createUserSerivce.execute({name, password, imgUrl:location});

        return res.json(token);
    }
}

module.exports = CreateUserController