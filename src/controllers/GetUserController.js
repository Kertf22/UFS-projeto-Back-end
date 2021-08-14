const GetUserService = require("../service/GetUserService");


class GetUserController {
    async handle(req,res){
        const getUserService = new GetUserService();

        const user = await getUserService.execute(req.user_id)

        return res.json(user)
    }
}

module.exports = GetUserController