const CreateCommentService = require("../service/CreateCommentService.js");

class CreateCommentController{
    async handle(req,res) {
        const { id, content } = req.body;
        const createCommentService = new CreateCommentService();

        const post = await createCommentService.execute({
            id,
            user_id:req.user_id,
            content
        });

        return res.json(post);
    }
}

module.exports = CreateCommentController