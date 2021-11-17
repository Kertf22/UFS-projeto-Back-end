const GetUsersbyIdService = require("../service/GetUsersbyIdService");


class GetUsersbyIdController {
    async handle(req, res){
        const getUserbyIdService = new GetUsersbyIdService();

        const { id } = req.params;

        const user = await getUserbyIdService.execute(id);

        return res.json(user)
    }


}

module.exports = GetUsersbyIdController;