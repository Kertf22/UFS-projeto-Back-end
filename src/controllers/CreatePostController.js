const CreatePostService = require("../service/CreatePostService.js");


class CreatePostController{
    async handle(req,res) {

        const { title, description, user_name, user_imgUrl} = req.body;

        const createPostService = new CreatePostService()

        const post = await createPostService.execute({
            title,
            description,
            user_id:req.user_id,
            user_name, 
            user_imgUrl
        })

        return res.json(post)
    }

}

module.exports = CreatePostController;