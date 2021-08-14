const PostRepository = require("../repository/PostRepository.js")

class GetAllPostsService {
    async execute(){
        const postRepository = new PostRepository()

        const posts = await postRepository.findAll()

        return posts
    }
}

module.exports = GetAllPostsService