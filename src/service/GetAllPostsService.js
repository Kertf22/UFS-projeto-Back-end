const PostRepository = require("../repository/PostRepository.js")

class GetAllPostsService {
    async execute({_page ,_limit}){
        const postRepository = new PostRepository()

        const posts = await postRepository.findAll({_page ,_limit})

        return posts
    }
}

module.exports = GetAllPostsService