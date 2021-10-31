const PostRepository = require("../repository/PostRepository.js")

class UserPostService {

    async execute({user_id,_page ,_limit}){
        const postRepository = new PostRepository()

        const post = await postRepository.findAllbyUser({user_id,_page ,_limit});

        return post
    }
}

module.exports = UserPostService