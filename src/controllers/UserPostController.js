const UserPostService = require("../service/UserPostService.js");


class UserPostController {
    async handle(req,res){
        const userPostService = new UserPostService();

        const post = await userPostService.execute({
            user_id:req.user_id
        })

        return res.json(post)
    }
}

module.exports = UserPostController;