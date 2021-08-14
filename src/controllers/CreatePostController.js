const CreatePostService = require("../service/CreatePostService.js");


class CreatePostController{
    async handle(req,res) {

        const { title, description, imgUrl } = req.body;

        const createPostService = new CreatePostService()

        const post = await createPostService.execute({
            user_id: req.user_id,
            title,
            description,
            imgUrl
        })

        return res.json(post)
    }

}

module.exports = CreatePostController;