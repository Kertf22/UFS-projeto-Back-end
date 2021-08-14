const GetAllPostsService = require("../service/GetAllPostsService.js");


class GetAllPostsController{
    async handle(req,res) {
        const getAllPostsService = new GetAllPostsService()

        const post = await getAllPostsService.execute();

        return res.json(post)
    }
}

module.exports = GetAllPostsController