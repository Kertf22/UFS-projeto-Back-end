const PostRepository = require("../repository/PostRepository")

class DeletePostService {
    async execute({post_id,user_id}){
        const postRepository = new PostRepository();

        const post = await postRepository.findOne({id: post_id})

        if (!post){
            throw new Error("Post não existe");
        }

        if (post.user_id != user_id){
            throw new Error("Não autorizado");  
        }

        const data = await postRepository.delete({
            id: post._id,
        })

        return data
    }
}

module.exports = DeletePostService