const GetAllPostsService = require("../service/GetAllPostsService.js");

class GetAllPostsController{
    async handle(req,res) {
        const getAllPostsService = new GetAllPostsService();

        const { _page ,_limit } = req.query;

        const post = await getAllPostsService.execute({_page:parseInt(_page) ,_limit:parseInt(_limit)});

        return res.json(post);
    }
}

module.exports = GetAllPostsController

