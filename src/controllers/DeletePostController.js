const DeletePostService = require("../service/DeletePostService.js")


class DeletePostController {
    async handle(req,res) {

        const { post_id } = req.body

        const deletePostService = new DeletePostService()

        const post = await deletePostService.execute({
            post_id,
            user_id: req.user_id
            
        })

        return res.json(post)
    }
}

module.exports = DeletePostController