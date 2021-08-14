const PostRepository = require("../repository/PostRepository.js")

class UserPostService {

    async execute({user_id}){
        const postRepository = new PostRepository()

        const post = await postRepository.findAllbyUser({user_id})

        return post
    }
}

module.exports = UserPostService