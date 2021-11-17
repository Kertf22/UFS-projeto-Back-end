const UserPostService = require("../service/UserPostService.js");


class UserPostController {
    async handle(req,res){
        const userPostService = new UserPostService();

        const { id } = req.params;
        const { _page ,_limit } = req.query;
        
        const post = await userPostService.execute({
            user_id:id,
            _page:parseInt(_page) ,
            _limit:parseInt(_limit)
        })

        return res.json(post)
    }
}

module.exports = UserPostController;