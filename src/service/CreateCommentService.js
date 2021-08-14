const PostRepository = require("../repository/PostRepository.js");

class CreateCommentService {
    async execute({id,user_id,content}){
        const postRepository = new PostRepository();

        const post = await postRepository.update({id,user_id,content});

        if (!post){
            throw new Error("Este post não existe!")
        }

        return post
    }
    
}

module.exports = CreateCommentService